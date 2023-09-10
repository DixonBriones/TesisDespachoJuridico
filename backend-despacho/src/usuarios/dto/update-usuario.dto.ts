import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
