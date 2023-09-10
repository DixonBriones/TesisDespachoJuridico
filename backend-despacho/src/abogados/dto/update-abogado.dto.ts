import { PartialType } from '@nestjs/mapped-types';
import { CreateAbogadoDto } from './create-abogado.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateAbogadoDto extends PartialType(CreateAbogadoDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
