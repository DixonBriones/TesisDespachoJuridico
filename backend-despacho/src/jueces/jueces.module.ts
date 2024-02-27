import { Module } from '@nestjs/common';
import { JuecesService } from './jueces.service';
import { JuecesController } from './jueces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Juez } from './entities/juece.entity';

@Module({
  controllers: [JuecesController],
  providers: [JuecesService],
 // imports:[TypeOrmModule.forFeature([Juez])]
})
export class JuecesModule {}
