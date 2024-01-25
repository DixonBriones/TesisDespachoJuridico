import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { AbogadosService } from './abogados.service';
import { CreateAbogadoDto } from './dto/create-abogado.dto';
import { UpdateAbogadoDto } from './dto/update-abogado.dto';

@Controller('abogado')
export class AbogadosController {
  constructor(private readonly abogadosService: AbogadosService) {}

  @Post()
  create(@Body() createAbogadoDto: CreateAbogadoDto) {
    return this.abogadosService.create(createAbogadoDto);
  }

  @Get()
  findAll() {
    return this.abogadosService.findAll();
  }

  @Get('searchId/:id')
  findOne(@Param('id') id: string) {
    return this.abogadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbogadoDto: UpdateAbogadoDto) {
    return this.abogadosService.update(id, updateAbogadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abogadosService.remove(id);
  }

  @Delete('eliminar/:id')
  removeReal(@Param('id') id: string) {
    return this.abogadosService.removeReal(id);
  }

  @Get('search')
  findName(@Query('q') q?: string){
    return this.abogadosService.findName(q);
  }

  @Get('identificacion/:identification')
  findIdentificationCompleta(@Param('identification') identificacion: string){
    return this.abogadosService.findIdentificationCompleta(identificacion);
  }

  @Get('reportAbogadoCasos')
  getCasosConRangoFechas(
    @Query('fechaInicio') fechaInicio?: string,
    @Query('fechaFin') fechaFin?: string,
    @Query('q') q?: string,
  ){
    return this.abogadosService.reportAbogadosCasos(fechaInicio,fechaFin,q);
  }

  @Get('reportAbogadoHonorarios')
  getHonorariosConRangoFechas(
    @Query('fechaInicio') fechaInicio?: string,
    @Query('fechaFin') fechaFin?: string,
  ){
    return this.abogadosService.reportAbogadosHonorarios(fechaInicio,fechaFin);
  }

  @Get('dashboard')
  getDashboard(){
    return this.abogadosService.dashboardResumen();
  }
}
