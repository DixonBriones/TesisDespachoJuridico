import { Injectable } from '@nestjs/common';
import { CreateTipoCasoDto } from './dto/create-tipo_caso.dto';
import { UpdateTipoCasoDto } from './dto/update-tipo_caso.dto';

@Injectable()
export class TipoCasoService {
  create(createTipoCasoDto: CreateTipoCasoDto) {
    return 'This action adds a new tipoCaso';
  }

  findAll() {
    return `This action returns all tipoCaso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoCaso`;
  }

  update(id: number, updateTipoCasoDto: UpdateTipoCasoDto) {
    return `This action updates a #${id} tipoCaso`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoCaso`;
  }
}
