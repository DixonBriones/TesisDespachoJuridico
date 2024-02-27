import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuecesService } from './jueces.service';
import { CreateJueceDto } from './dto/create-juece.dto';
import { UpdateJueceDto } from './dto/update-juece.dto';

@Controller('jueces')
export class JuecesController {
  // constructor(private readonly juecesService: JuecesService) {}

  // @Post()
  // create(@Body() createJueceDto: CreateJueceDto) {
  //   return this.juecesService.create(createJueceDto);
  // }

  // @Get()
  // findAll() {
  //   return this.juecesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.juecesService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJueceDto: UpdateJueceDto) {
  //   return this.juecesService.update(id, updateJueceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.juecesService.remove(id);
  // }
}
