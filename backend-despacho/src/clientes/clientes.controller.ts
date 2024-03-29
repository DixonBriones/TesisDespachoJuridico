import { Controller, Get, Post, Body, Patch, Param, Delete,ParseUUIDPipe ,UseGuards,Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

//@UseGuards(JwtAuthGuard)
@Controller('cliente')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get('searchId/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientesService.remove(id);
  }

  @Get('search')
  findIdentification(@Query('q') q?: string){
    return this.clientesService.findIdentification(q);
  }

  @Get('identificacion/:identification')
  findIdentificationCompleta(@Param('identification') identificacion: string){
    return this.clientesService.findIdentificationCompleta(identificacion);
  }

  @Get('dashboard')
  getDashboard(){
    return this.clientesService.dashboardResumen();
  }

}
