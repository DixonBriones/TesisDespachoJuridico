import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
