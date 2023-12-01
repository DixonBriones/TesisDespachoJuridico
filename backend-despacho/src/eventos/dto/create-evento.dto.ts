import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min,IsDateString, IsDate } from "class-validator";
import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";
import { TipoEvento } from "src/tipo_evento/entities/tipo_evento.entity";

export class CreateEventoDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsNotEmpty()
    @IsDateString()
    date_start: Date;

    @IsNotEmpty()
    @IsDateString()
    date_end: Date;

    @IsString()
    @IsNotEmpty()
    color:string;

    @IsString()
    @IsNotEmpty()
    color_secondary:string;

    @IsNotEmpty()
    event_type:TipoEvento;
    
    @IsNotEmpty()
    legal_case:CasoLegal;
}
