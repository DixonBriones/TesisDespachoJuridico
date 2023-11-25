import { Module } from '@nestjs/common';
import { TipoEventoService } from './tipo_evento.service';
import { TipoEventoController } from './tipo_evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEvento } from './entities/tipo_evento.entity';

@Module({
  controllers: [TipoEventoController],
  providers: [TipoEventoService],
  imports:[TypeOrmModule.forFeature([TipoEvento])]
})
export class TipoEventoModule {}
