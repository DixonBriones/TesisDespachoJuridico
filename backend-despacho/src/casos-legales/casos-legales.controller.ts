import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
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
    return this.casosLegalesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCasosLegaleDto: UpdateCasosLegaleDto) {
    return this.casosLegalesService.update(id, updateCasosLegaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.casosLegalesService.remove(id);
  }

  @Get('admin/casos')
  findCasos(@Query('q') q?: string) {
    return this.casosLegalesService.findCasos(q);
  }

  @Get('admin/casos-cerrados')
  findCasosCerrados(@Query('q') q?: string) {
    return this.casosLegalesService.findCasosCerrados(q);
  }

  @Get('abogadoId/:id')
  findAbogado(@Param('id') id: string, @Query('q') q?: string) {
    return this.casosLegalesService.findByAbogado(id,q);
  }

  @Get('abogadoIdCerrado/:id')
  findAbogadoCerrado(@Param('id') id: string, @Query('q') q?: string) {
    return this.casosLegalesService.findByAbogadoCerrado(id,q);
  }

  @Get('clienteId/:id')
  findCliente(@Param('id') id: string) {
    return this.casosLegalesService.findByClient(id);
  }

  @Get('paymentPendient/:id')
  findPagoPendiente(@Param('id') id: string, @Query('q') q?: string) {
    return this.casosLegalesService.obtenerCasosPendientesPago(id,q);
  }

  @Get('paymentFinish/:id')
  findPagoFinalizado(@Param('id') id: string, @Query('q') q?: string) {
    return this.casosLegalesService.obtenerCasosPagoFinalizado(id,q);
  }

  @Get('full/:id')
  findOneCasoCompleto(@Param('id') id: string) {
    return this.casosLegalesService.findOneCasoCompleto(id);
  }
}
