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
    const casoLegal = await this.casoLegalRepository.find({relations:{client:true, lawyer:true}});
    return casoLegal
  
  }

  async findOne(id: number) {
    return `This action returns a #${id} casosLegale`;
  }

  async update(id: number, updateCasosLegaleDto: UpdateCasosLegaleDto) {
    return `This action updates a #${id} casosLegale`;
  }

  async remove(id: number) {
    return `This action removes a #${id} casosLegale`;
  }
}
