import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
    //@IsBoolean()
    //@IsOptional()
    //status?: boolean;
}
