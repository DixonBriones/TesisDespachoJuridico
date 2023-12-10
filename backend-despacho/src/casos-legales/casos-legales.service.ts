import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCasosLegaleDto } from './dto/create-casos-legale.dto';
import { UpdateCasosLegaleDto } from './dto/update-casos-legale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository ,Brackets} from 'typeorm';
import { CasoLegal } from './entities/casos-legale.entity';
import { EstadoCaso } from 'src/constants/status_case';

@Injectable()
export class CasosLegalesService {
  private readonly logger = new Logger('CasoLegalService');

  constructor(
    @InjectRepository(CasoLegal)
    private readonly casoLegalRepository: Repository<CasoLegal>,

  ) {}

  async create(createCasosLegalDto: CreateCasosLegaleDto) {
    try {
      const casoLegal = this.casoLegalRepository.create(createCasosLegalDto);
      await this.casoLegalRepository.save(casoLegal);
      return casoLegal;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const casoLegal = await this.casoLegalRepository.find({where:{status:true},relations:{client:true, lawyer:true,case_type:true}});
    return casoLegal
  
  }

  async findOne(id: string) {
    const casoLegal = await this.casoLegalRepository.findOne({ where:{status:true,id:id}});
    if (!casoLegal) throw new NotFoundException(`Caso Legal ${id} no encontrado`);
    return casoLegal;
  }

  async update(id: string, updateCasosLegaleDto: UpdateCasosLegaleDto) {
    const casoLegal = await this.casoLegalRepository.preload({
      id: id,
      ...updateCasosLegaleDto,
    });
    if (!casoLegal) throw new NotFoundException(`Caso Legal ${id} no encontrado`);

    try {
      await this.casoLegalRepository.save(casoLegal);
      return casoLegal;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const casoLegal= await  this.findOne(id);
    await this.update(id,{status:false });
    return {...casoLegal, id};
  }

  async findByAbogado(id:string,query: string) {
    //const casoLegal = await this.casoLegalRepository.find({loadRelationIds:true,where:{lawyer: id,status:true}});
    const estado=EstadoCaso.CierreDelCaso
    const casoLegal = this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .where('caso_legal.lawyer.id = :id', { id })
    .andWhere('caso_legal.status = true')
    .andWhere('caso_legal.status_case != :estado',{estado})

    if (query) {
      casoLegal.andWhere(
        new Brackets(qb => {
          qb.where(`caso_legal.name_case LIKE :q`, { q: `%${query}%` })
            .orWhere('client.name LIKE :q', { q: `%${query}%` });
        })
      );
    }
    const resultado = await casoLegal.getMany();
    return resultado
  
  }

  async findByAbogadoCerrado(id:string,query: string) {
    //const casoLegal = await this.casoLegalRepository.find({loadRelationIds:true,where:{lawyer: id,status:true}});
    const estado=EstadoCaso.CierreDelCaso
    const casoLegal = this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .where('caso_legal.lawyer.id = :id', { id })
    .andWhere('caso_legal.status_case = :estado',{estado})
    .andWhere('caso_legal.status = true')

    if (query) {
      casoLegal.andWhere(
        new Brackets(qb => {
          qb.where(`caso_legal.name_case LIKE :q`, { q: `%${query}%` })
            .orWhere('client.name LIKE :q', { q: `%${query}%` });
        })
      );
    }
    const resultado = await casoLegal.getMany();
    return resultado
  
  }

  async findByClient(id:string) {
    const casoLegal = await this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .where('caso_legal.client.id = :id', { id })
    .getMany();
    return casoLegal
  }

  async findByAbogadoPago(id:string) {
    //const casoLegal = await this.casoLegalRepository.find({loadRelationIds:true,where:{lawyer: id,status:true}});
    const casoLegal = await this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .where('caso_legal.lawyer.id = :id', { id })
    .where('caso_legal.status = true')
    .getMany();
    return casoLegal
  
  }

  

  async obtenerCasosPendientesPago(id:string,query: string) {
    const casos = this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .leftJoinAndSelect('caso_legal.payment', 'pago')
    .where('caso_legal.status = true')
    .where('lawyer.id = :id', { id })
    
    
    if (query) {
      casos.andWhere(
        new Brackets(qb => {
          qb.where(`caso_legal.name_case LIKE :q`, { q: `%${query}%` })
            .orWhere('client.name LIKE :q', { q: `%${query}%` });
        })
      );
    }
    const resultado = await casos.getMany();
    // Filtrar casos pendientes de pago
    const casosPendientesPago = resultado.filter(caso => {
      const honorariosTotales = caso.service_fee;
      const pagosTotales = caso.payment.reduce((total, pago) => total + Number(pago.amount), 0);
      return pagosTotales < honorariosTotales;
    });

    return casosPendientesPago;
  }



  async obtenerCasosPagoFinalizado(id:string,query: string) {
    const casos = this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .leftJoinAndSelect('caso_legal.payment', 'pago')
    .where('caso_legal.status = true')
    .where('lawyer.id = :id', { id })
    
    
    if (query) {
      casos.andWhere(
        new Brackets(qb => {
          qb.where(`caso_legal.name_case LIKE :q`, { q: `%${query}%` })
            .orWhere('client.name LIKE :q', { q: `%${query}%` });
        })
      );
    }
    const resultado = await casos.getMany();
    // Filtrar casos pendientes de pago
    const casosPendientesPago = resultado.filter(caso => {
      const honorariosTotales = caso.service_fee;
      const pagosTotales = caso.payment.reduce((total, pago) => total + Number(pago.amount), 0);
      return pagosTotales >= honorariosTotales;
    });

    return casosPendientesPago;
  }
}
