import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min } from "class-validator";

export class CreateTipoEventoDto {
    @IsString()
    @IsNotEmpty()
    name:string;
}
