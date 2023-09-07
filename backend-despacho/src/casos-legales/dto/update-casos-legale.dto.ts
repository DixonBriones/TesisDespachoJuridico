import { PartialType } from '@nestjs/mapped-types';
import { CreateCasosLegaleDto } from './create-casos-legale.dto';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsOptional,
    Length,
    Max,
    IsEmail,
    IsDate,
    IsEnum,
    IsUUID,
    IsBoolean
  } from 'class-validator';

export class UpdateCasosLegaleDto extends PartialType(CreateCasosLegaleDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
