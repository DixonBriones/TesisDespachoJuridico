import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository,Like,Relation } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTipoEventoDto } from './dto/create-tipo_evento.dto';
import { UpdateTipoEventoDto } from './dto/update-tipo_evento.dto';
import { TipoEvento } from './entities/tipo_evento.entity';

@Injectable()
export class TipoEventoService {
  private readonly logger = new Logger('Tipo_Evento_Service');

  constructor(
    @InjectRepository(TipoEvento)
    private readonly tipoEventoRepository: Repository<TipoEvento>,
  ) {}

  async findName(name: string) {
    const tipoEvento = await this.tipoEventoRepository.findOneBy({ name });
    return tipoEvento;
  }

  async create(createTipoEventoDto: CreateTipoEventoDto) {
    const tipoExistente= await this.findName(createTipoEventoDto.name);

    if(tipoExistente && tipoExistente.status==false){
      await this.update(tipoExistente.id,{status:true });
      return tipoExistente
    }

    try {
      const tipoCaso = this.tipoEventoRepository.create(createTipoEventoDto);
      await this.tipoEventoRepository.save(tipoCaso);
      return tipoCaso;
    } catch (error) {
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const tipoEvento = await this.tipoEventoRepository.find({where:{status:true}});
    return tipoEvento
  }

  async findOne(id: string) {
    const tipoEvento = await this.tipoEventoRepository.findOne({ where:{status:true,id:id}});
    if (!tipoEvento) throw new NotFoundException(`Tipo de evento ${id} no encontrado`);
    return tipoEvento;
  }

  async update(id: string, updateTipoEventoDto: UpdateTipoEventoDto) {
    const tipoEvento = await this.tipoEventoRepository.preload({
      id: id,
      ...updateTipoEventoDto,
    });
    if (!tipoEvento) throw new NotFoundException(`Tipo de evento ${id} no encontrado`);

    try {
      await this.tipoEventoRepository.save(tipoEvento);
      return tipoEvento;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const tipoEvento= await  this.findOne(id);
    await this.update(id,{status:false });
    return {...tipoEvento, id};
  }
}
