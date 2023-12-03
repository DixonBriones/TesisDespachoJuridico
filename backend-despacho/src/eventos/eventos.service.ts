import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository,Like,Relation } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  private readonly logger = new Logger('Evento_Service');

  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}


  async create(createEventoDto: CreateEventoDto) {
    try {
      const evento = this.eventoRepository.create(createEventoDto);
      await this.eventoRepository.save(evento);
      return evento;
    } catch (error) {
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const eventos = await this.eventoRepository.find();
    return eventos
  }

  async findOne(id: string) {
    const evento = await this.eventoRepository.findOne({ where:{id:id}});
    if (!evento) throw new NotFoundException(`Evento ${id} no encontrado`);
    return evento;
  }

  async update(id: string, updateEventoDto: UpdateEventoDto) {
    const evento = await this.eventoRepository.preload({
      id: id,
      ...updateEventoDto,
    });
    if (!evento) throw new NotFoundException(`Evento ${id} no encontrado`);

    try {
      await this.eventoRepository.save(evento);
      return evento;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const evento= await  this.findOne(id);
    await this.eventoRepository.remove(evento)
    return {...evento, id};
  }


  async findEventAbogado(id: string) {
    //const evento = await this.eventoRepository.find({ relations: ['legal_case'],where:{}});
    const evento = await this.eventoRepository.createQueryBuilder('evento')
    .leftJoinAndSelect('evento.event_type', 'event_type')
    .leftJoinAndSelect('evento.legal_case', 'legal_case')
    .leftJoinAndSelect('legal_case.lawyer', 'lawyer')
    .where('lawyer.id = :id', { id })
    .getMany();
    if (!evento) throw new NotFoundException(`Evento ${id} no encontrado`);
    return evento;
  }
}
