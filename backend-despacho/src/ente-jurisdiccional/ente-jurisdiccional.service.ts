import { Injectable } from '@nestjs/common';
import { CreateEnteJurisdiccionalDto } from './dto/create-ente-jurisdiccional.dto';
import { UpdateEnteJurisdiccionalDto } from './dto/update-ente-jurisdiccional.dto';

@Injectable()
export class EnteJurisdiccionalService {
  create(createEnteJurisdiccionalDto: CreateEnteJurisdiccionalDto) {
    return 'This action adds a new enteJurisdiccional';
  }

  findAll() {
    return `This action returns all enteJurisdiccional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enteJurisdiccional`;
  }

  update(id: number, updateEnteJurisdiccionalDto: UpdateEnteJurisdiccionalDto) {
    return `This action updates a #${id} enteJurisdiccional`;
  }

  remove(id: number) {
    return `This action removes a #${id} enteJurisdiccional`;
  }
}
