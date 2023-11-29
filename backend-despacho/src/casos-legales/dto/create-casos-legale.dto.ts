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
  IsDateString
} from 'class-validator';
import { Abogado } from 'src/abogados/entities/abogado.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { EstadoCaso } from 'src/constants/status_case';
import { TipoCaso } from 'src/tipo_caso/entities/tipo_caso.entity';

export class CreateCasosLegaleDto {
  @IsNotEmpty()
  @IsString()
  name_case: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(EstadoCaso)
  @IsNotEmpty()
  status_case: EstadoCaso;

  @IsNotEmpty()
  @IsDateString()
  date_start: Date;

  @IsNotEmpty()
  service_fee:number

  @IsNotEmpty()
  case_type: TipoCaso;

  @IsString()
  client: Cliente;

  @IsString()
  lawyer: Abogado;
}
