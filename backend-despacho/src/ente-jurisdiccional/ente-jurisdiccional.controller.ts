import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnteJurisdiccionalService } from './ente-jurisdiccional.service';
import { CreateEnteJurisdiccionalDto } from './dto/create-ente-jurisdiccional.dto';
import { UpdateEnteJurisdiccionalDto } from './dto/update-ente-jurisdiccional.dto';

@Controller('ente-jurisdiccional')
export class EnteJurisdiccionalController {
  constructor(private readonly enteJurisdiccionalService: EnteJurisdiccionalService) {}

  @Post()
  create(@Body() createEnteJurisdiccionalDto: CreateEnteJurisdiccionalDto) {
    return this.enteJurisdiccionalService.create(createEnteJurisdiccionalDto);
  }

  @Get()
  findAll() {
    return this.enteJurisdiccionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enteJurisdiccionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnteJurisdiccionalDto: UpdateEnteJurisdiccionalDto) {
    return this.enteJurisdiccionalService.update(+id, updateEnteJurisdiccionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enteJurisdiccionalService.remove(+id);
  }
}
