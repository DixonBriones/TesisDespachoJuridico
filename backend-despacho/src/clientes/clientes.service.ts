import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';

@Injectable()
export class ClientesService {
  private readonly logger = new Logger('ClienteService');

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = this.clienteRepository.create(createClienteDto);
      await this.clienteRepository.save(cliente);
      return cliente;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const clientes = await this.clienteRepository.find({});
    return clientes
  }

  async findOne(id: string) {
    //console.log(id)
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) throw new NotFoundException(`Cliente ${id} no encontrado`);
    return cliente;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clienteRepository.preload({
      id: id,
      ...updateClienteDto,
    });
    if (!cliente) throw new NotFoundException(`Cliente ${id} no encontrado`);

    try {
      await this.clienteRepository.save(cliente);
      return cliente;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const cliente = await this.findOne(id);
    await this.clienteRepository.remove(cliente);
  }

  async findIdentification(identification: string) {
    return this.clienteRepository.find({
      where: {
        identification: Like(`%${identification}%`),
        status:true,
      },
    });
  }

  async findIdentificationCompleta(identification: string) {
    return this.clienteRepository.find({
      where: {
        identification: identification,
        status:true,
      },
    });
  }

}
