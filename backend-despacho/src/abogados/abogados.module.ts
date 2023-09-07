import { Module } from '@nestjs/common';
import { AbogadosService } from './abogados.service';
import { AbogadosController } from './abogados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abogado } from './entities/abogado.entity';

@Module({
  controllers: [AbogadosController],
  providers: [AbogadosService],
  imports:[ TypeOrmModule.forFeature([
    Abogado
  ]) ]
})
export class AbogadosModule {}
