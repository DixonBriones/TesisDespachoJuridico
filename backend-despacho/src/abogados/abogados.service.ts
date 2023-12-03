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
import { Repository,Like,Relation } from 'typeorm';
import { Abogado } from './entities/abogado.entity';

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


  

}
