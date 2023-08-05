import { Module } from '@nestjs/common';
import { AbogadosService } from './abogados.service';
import { AbogadosController } from './abogados.controller';

@Module({
  controllers: [AbogadosController],
  providers: [AbogadosService]
})
export class AbogadosModule {}
