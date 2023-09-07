import { Module } from '@nestjs/common';
import { CasosLegalesService } from './casos-legales.service';
import { CasosLegalesController } from './casos-legales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasoLegal } from './entities/casos-legale.entity';

@Module({
  controllers: [CasosLegalesController],
  providers: [CasosLegalesService],
  imports:[ TypeOrmModule.forFeature([CasoLegal])]
})
export class CasosLegalesModule {}
