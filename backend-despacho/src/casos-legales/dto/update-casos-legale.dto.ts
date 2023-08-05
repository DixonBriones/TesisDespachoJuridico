import { PartialType } from '@nestjs/mapped-types';
import { CreateCasosLegaleDto } from './create-casos-legale.dto';

export class UpdateCasosLegaleDto extends PartialType(CreateCasosLegaleDto) {}
