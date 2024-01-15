import { Module } from '@nestjs/common';
import { CasosLegalesService } from './casos-legales.service';
import { CasosLegalesController } from './casos-legales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasoLegal } from './entities/casos-legale.entity';
import { DocumentosModule } from 'src/documentos/documentos.module';
import { PagosModule } from 'src/pagos/pagos.module';
import { EventosModule } from 'src/eventos/eventos.module';

@Module({
  controllers: [CasosLegalesController],
  providers: [CasosLegalesService],
  imports:[ TypeOrmModule.forFeature([CasoLegal]),DocumentosModule,PagosModule,EventosModule]
})
export class CasosLegalesModule {}
