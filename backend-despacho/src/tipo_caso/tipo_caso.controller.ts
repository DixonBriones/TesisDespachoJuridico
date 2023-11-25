import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCasoService } from './tipo_caso.service';
import { CreateTipoCasoDto } from './dto/create-tipo_caso.dto';
import { UpdateTipoCasoDto } from './dto/update-tipo_caso.dto';

@Controller('tipo-caso')
export class TipoCasoController {
  constructor(private readonly tipoCasoService: TipoCasoService) {}

  @Post()
  create(@Body() createTipoCasoDto: CreateTipoCasoDto) {
    return this.tipoCasoService.create(createTipoCasoDto);
  }

  @Get()
  findAll() {
    return this.tipoCasoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCasoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoCasoDto: UpdateTipoCasoDto) {
    return this.tipoCasoService.update(+id, updateTipoCasoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoCasoService.remove(+id);
  }
}
