import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository,Like,Relation } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJueceDto } from './dto/create-juece.dto';
import { UpdateJueceDto } from './dto/update-juece.dto';
import { Juez } from './entities/juece.entity';

@Injectable()
export class JuecesService {
  // private readonly logger = new Logger('Juez_Service');

  // constructor(
  //   @InjectRepository(Juez)
  //   private readonly tipoCasoRepository: Repository<Juez>,
  // ) {}

  // async findName(name: string) {
  //   const tipoCaso = await this.tipoCasoRepository.findOneBy({ name });
  //   return tipoCaso;
  // }

  // async create(createTipoCasoDto: CreateJueceDto) {
  //   const tipoExistente= await this.findName(createTipoCasoDto.name);

  //   if(tipoExistente && tipoExistente.status==false){
  //     await this.update(tipoExistente.id,{status:true });
  //     return tipoExistente
  //   }

  //   try {
  //     const tipoCaso = this.tipoCasoRepository.create(createTipoCasoDto);
  //     await this.tipoCasoRepository.save(tipoCaso);
  //     return tipoCaso;
  //   } catch (error) {
  //     if (error.code === '23505') throw new BadRequestException(error.detail);
  //     this.logger.error(error);
  //     throw new InternalServerErrorException('Error no esperado');
  //   }
  // }

  // async findAll() {
  //   const tipoCaso = await this.tipoCasoRepository.find({where:{status:true}});
  //   return tipoCaso
  // }

  // async findOne(id: string) {
  //   const tipoCaso = await this.tipoCasoRepository.findOne({ where:{status:true,id:id}});
  //   if (!tipoCaso) throw new NotFoundException(`Tipo de caso ${id} no encontrado`);
  //   return tipoCaso;
  // }

  // async update(id: string, updateTipoCasoDto: UpdateJueceDto) {
  //   const tipoCaso = await this.tipoCasoRepository.preload({
  //     id: id,
  //     ...updateTipoCasoDto,
  //   });
  //   if (!tipoCaso) throw new NotFoundException(`Tipo de caso ${id} no encontrado`);

  //   try {
  //     await this.tipoCasoRepository.save(tipoCaso);
  //     return tipoCaso;
  //   } catch (error) {
  //     console.log(error);
  //     throw new BadRequestException(error.detail);
  //   }
  // }

  // async remove(id: string) {
  //   const tipoCaso= await  this.findOne(id);
  //   await this.update(id,{status:false });
  //   return {...tipoCaso, id};
  // }
}
