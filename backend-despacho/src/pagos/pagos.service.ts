import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository,Like,Relation } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagosService {
  private readonly logger = new Logger('Pago_Service');

  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
  ) {}


  async create(createPagoDto: CreatePagoDto) {
    try {
      const pago = this.pagoRepository.create(createPagoDto);
      await this.pagoRepository.save(pago);
      return pago;
    } catch (error) {
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const pagos = await this.pagoRepository.find();
    return pagos
  }

  async findOne(id: string) {
    const pago = await this.pagoRepository.findOne({ where:{id:id}});
    if (!pago) throw new NotFoundException(`Pago ${id} no encontrado`);
    return pago;
  }

  async update(id: string, updatePagoDto: UpdatePagoDto) {
    const pago = await this.pagoRepository.preload({
      id: id,
      ...updatePagoDto,
    });
    if (!pago) throw new NotFoundException(`Evento ${id} no encontrado`);

    try {
      await this.pagoRepository.save(pago);
      return pago;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const evento= await  this.findOne(id);
    await this.pagoRepository.remove(evento)
    return {...evento, id};
  }

  async eliminarPagosPorCasoLegalId(casoLegalId: string): Promise<void> {
    const documentos = await this.pagoRepository.find({ where: { legal_case: { id: casoLegalId } } });
    // Eliminar documentos
    await Promise.all(documentos.map(documento => this.pagoRepository.remove(documento)));
  }

  async findPagoAbogado(id: string) {
    //const evento = await this.eventoRepository.find({ relations: ['legal_case'],where:{}});
    const evento = await this.pagoRepository.createQueryBuilder('pago')
    .leftJoinAndSelect('pago.legal_case', 'legal_case')
    .leftJoinAndSelect('legal_case.lawyer', 'lawyer')
    .where('lawyer.id = :id', { id })
    .getMany();
    if (!evento) throw new NotFoundException(`Pago ${id} no encontrado`);
    return evento;
  }

  async findPagoCaso(id: string) {
    //const evento = await this.eventoRepository.find({ relations: ['legal_case'],where:{}});
    const evento = await this.pagoRepository.createQueryBuilder('pago')
    .leftJoinAndSelect('pago.legal_case', 'legal_case')
    .where('legal_case.id = :id', { id })
    .getMany();
    if (!evento) throw new NotFoundException(`Pago ${id} no encontrado`);
    return evento;
  }
}
