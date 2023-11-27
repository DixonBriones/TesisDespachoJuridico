import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEventoDto } from './create-tipo_evento.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateTipoEventoDto extends PartialType(CreateTipoEventoDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
