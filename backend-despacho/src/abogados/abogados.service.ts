import { Injectable } from '@nestjs/common';
import { CreateAbogadoDto } from './dto/create-abogado.dto';
import { UpdateAbogadoDto } from './dto/update-abogado.dto';

@Injectable()
export class AbogadosService {
  create(createAbogadoDto: CreateAbogadoDto) {
    return 'This action adds a new abogado';
  }

  findAll() {
    return `This action returns all abogados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abogado`;
  }

  update(id: number, updateAbogadoDto: UpdateAbogadoDto) {
    return `This action updates a #${id} abogado`;
  }

  remove(id: number) {
    return `This action removes a #${id} abogado`;
  }
}
