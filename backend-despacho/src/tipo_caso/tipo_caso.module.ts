import { Module } from '@nestjs/common';
import { TipoCasoService } from './tipo_caso.service';
import { TipoCasoController } from './tipo_caso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCaso } from './entities/tipo_caso.entity';

@Module({
  controllers: [TipoCasoController],
  providers: [TipoCasoService],
  imports:[TypeOrmModule.forFeature([TipoCaso])]
})
export class TipoCasoModule {}
