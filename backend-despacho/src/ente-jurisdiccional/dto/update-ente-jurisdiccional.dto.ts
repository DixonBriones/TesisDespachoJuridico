import { PartialType } from '@nestjs/mapped-types';
import { CreateEnteJurisdiccionalDto } from './create-ente-jurisdiccional.dto';

export class UpdateEnteJurisdiccionalDto extends PartialType(CreateEnteJurisdiccionalDto) {}
