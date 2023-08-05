import { Injectable } from '@nestjs/common';
import { CreateCasosLegaleDto } from './dto/create-casos-legale.dto';
import { UpdateCasosLegaleDto } from './dto/update-casos-legale.dto';

@Injectable()
export class CasosLegalesService {
  create(createCasosLegaleDto: CreateCasosLegaleDto) {
    return 'This action adds a new casosLegale';
  }

  findAll() {
    return `This action returns all casosLegales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} casosLegale`;
  }

  update(id: number, updateCasosLegaleDto: UpdateCasosLegaleDto) {
    return `This action updates a #${id} casosLegale`;
  }

  remove(id: number) {
    return `This action removes a #${id} casosLegale`;
  }
}
