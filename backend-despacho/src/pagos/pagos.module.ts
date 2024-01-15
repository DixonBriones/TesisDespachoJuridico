import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
@Module({
  controllers: [PagosController],
  providers: [PagosService],
  exports: [PagosService],
  imports:[TypeOrmModule.forFeature([Pago])]
})
export class PagosModule {}
