import { Module } from '@nestjs/common';
import { EnteJurisdiccionalService } from './ente-jurisdiccional.service';
import { EnteJurisdiccionalController } from './ente-jurisdiccional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnteJurisdiccional } from './entities/ente-jurisdiccional.entity';

@Module({
  controllers: [EnteJurisdiccionalController],
  providers: [EnteJurisdiccionalService],
 // imports:[TypeOrmModule.forFeature([EnteJurisdiccional])]
})
export class EnteJurisdiccionalModule {}
