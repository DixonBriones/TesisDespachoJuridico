import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasosLegalesService } from './casos-legales.service';
import { CreateCasosLegaleDto } from './dto/create-casos-legale.dto';
import { UpdateCasosLegaleDto } from './dto/update-casos-legale.dto';

@Controller('caso-legal')
export class CasosLegalesController {
  constructor(private readonly casosLegalesService: CasosLegalesService) {}

  @Post()
  create(@Body() createCasosLegaleDto: CreateCasosLegaleDto) {
    return this.casosLegalesService.create(createCasosLegaleDto);
  }

  @Get()
  findAll() {
    return this.casosLegalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casosLegalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCasosLegaleDto: UpdateCasosLegaleDto) {
    return this.casosLegalesService.update(+id, updateCasosLegaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.casosLegalesService.remove(+id);
  }
}
