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
} from 'class-validator';
import { EstadoCaso } from 'src/constants/status_case';

export class CreateCasosLegaleDto {
  @IsNotEmpty()
  @IsString()
  name_case: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  date_start: Date;

  @IsEnum(EstadoCaso)
  @IsNotEmpty()
  status_case: EstadoCaso;

  @IsUUID()
  @IsNotEmpty()
  client: string;

  @IsUUID()
  @IsNotEmpty()
  lawyer: string;
}
