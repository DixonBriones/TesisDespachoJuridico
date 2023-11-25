import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCasoDto } from './create-tipo_caso.dto';

export class UpdateTipoCasoDto extends PartialType(CreateTipoCasoDto) {}
