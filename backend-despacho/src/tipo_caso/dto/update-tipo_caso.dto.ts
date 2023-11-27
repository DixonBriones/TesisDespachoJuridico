import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCasoDto } from './create-tipo_caso.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateTipoCasoDto extends PartialType(CreateTipoCasoDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
