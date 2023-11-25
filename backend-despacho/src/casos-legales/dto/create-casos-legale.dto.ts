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
import { Abogado } from 'src/abogados/entities/abogado.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { EstadoCaso } from 'src/constants/status_case';

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

  date_start: Date;

  @IsNotEmpty()
  service_fee:number

  @IsNotEmpty()
  category_case:string

  @IsString()
  client: Cliente;

  @IsString()
  lawyer: Abogado;
}
