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
import { Repository } from 'typeorm';
import { CasoLegal } from './entities/casos-legale.entity';

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

  async findByAbogado(id:string) {
    //const casoLegal = await this.casoLegalRepository.find({loadRelationIds:true,where:{lawyer: id,status:true}});
    const casoLegal = await this.casoLegalRepository.createQueryBuilder('caso_legal')
    .leftJoinAndSelect('caso_legal.lawyer', 'lawyer')
    .leftJoinAndSelect('caso_legal.client', 'client')
    .leftJoinAndSelect('caso_legal.case_type', 'case_type')
    .where('caso_legal.status = true')
    .where('caso_legal.lawyer.id = :id', { id })
    .getMany();
    return casoLegal
  
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
}
