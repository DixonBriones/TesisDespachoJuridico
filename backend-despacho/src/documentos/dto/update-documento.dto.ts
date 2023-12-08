import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentoDto } from './create-documento.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateDocumentoDto extends PartialType(CreateDocumentoDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
