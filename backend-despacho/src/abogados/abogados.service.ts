import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateAbogadoDto } from './dto/create-abogado.dto';
import { UpdateAbogadoDto } from './dto/update-abogado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like,Relation,Brackets } from 'typeorm';
import { Abogado } from './entities/abogado.entity';
import { EstadoCaso } from 'src/constants/status_case';

@Injectable()
export class AbogadosService {
  private readonly logger = new Logger('AbogadoService');

  constructor(
    @InjectRepository(Abogado)
    private readonly abogadoRepository: Repository<Abogado>,
  ) {}


  async create(createAbogadoDto: CreateAbogadoDto) {
    try {
      const abogado = this.abogadoRepository.create(createAbogadoDto);
      await this.abogadoRepository.save(abogado);
      return abogado;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const abogados = await this.abogadoRepository.find({relations:['user']});
    return abogados
  }

  async findOne(id: string) {
    const abogado = await this.abogadoRepository.findOne({relations:['user'],where:{id:id}});
    if (!abogado) throw new NotFoundException(`Abogado ${id} no encontrado`);
    return abogado;
  }

  async update(id: string, updateAbogadoDto: UpdateAbogadoDto) {
    const abogado = await this.abogadoRepository.preload({
      id: id,
      ...updateAbogadoDto,
    });
    if (!abogado) throw new NotFoundException(`Abogado ${id} no encontrado`);

    try {

      await this.abogadoRepository.save(abogado);
      return abogado;

    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const abogado= await  this.findOne(id);
    await this.update(id,{status:false });
    return {...abogado, id};
  }

  async removeReal(id: string) {
    const abogado= await  this.findOne(id);
    await this.abogadoRepository.remove(abogado);
    return {...abogado, id};
  }

  async findName(name: string) {
    return this.abogadoRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      relations:['user']
    });
  }


  async findIdentificationCompleta(identification: string) {
    return this.abogadoRepository.findOne({
      where: {
        identification: identification,
        status:true,
      },
    });
  }

  async reportAbogadosCasos(fechaInicio: string, fechaFin: string,query: string) {
    const fin=new Date(fechaFin)
    const inicio=new Date(fechaInicio)
    const abogado = this.abogadoRepository.createQueryBuilder('lawyer')
    .leftJoinAndSelect('lawyer.legal_case', 'legal_case')

    if (query) {
      abogado.where('legal_case.status_case = :query',{query})
    }

    abogado.select(['lawyer.name', 'COUNT(CASE WHEN legal_case.status = true AND legal_case.date_start BETWEEN :inicio AND :fin THEN 1 ELSE null END) AS casoCount'])
    .groupBy('lawyer.name')
    .setParameters({ inicio, fin });

    const resultado = await abogado.getRawMany();
    return resultado
  }

  async reportAbogadosHonorarios(fechaInicio: string, fechaFin: string) {
    const fin=new Date(fechaFin)
    const inicio=new Date(fechaInicio)
    const abogado = this.abogadoRepository.createQueryBuilder('lawyer')
    .leftJoinAndSelect('lawyer.legal_case', 'legal_case')
    .select(['lawyer.name', 'SUM(CASE WHEN legal_case.status = true AND legal_case.date_start BETWEEN :inicio AND :fin THEN legal_case.service_fee ELSE 0 END) AS sumaServiceFee'])
    .groupBy('lawyer.name')
    .setParameters({ inicio, fin });
    
    const resultado = await abogado.getRawMany();
    return resultado
  }

  async dashboardResumen() {
    const estado=EstadoCaso.CierreDelCaso
    const abogado = this.abogadoRepository.createQueryBuilder('lawyer')
    .leftJoinAndSelect('lawyer.legal_case', 'legal_case')
    .leftJoinAndSelect('legal_case.document', 'document')
    .select([
      'lawyer.name as lawyerName',
      'lawyer.id as lawyerId',
      'COUNT(DISTINCT CASE WHEN legal_case.status = true AND legal_case.status_case != :estado THEN legal_case.id END) as openActiveCaseCount',
      'COUNT(DISTINCT CASE WHEN document.status = true THEN document.id END) as activeDocumentCount',
    ])
    .groupBy('lawyer.id, lawyer.name')
    .setParameters({ estado});
    //.groupBy('lawyer.name')
    const resultado = await abogado.getRawMany();
    return resultado
  }
  
}
