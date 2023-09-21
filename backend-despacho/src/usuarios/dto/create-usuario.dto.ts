import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min,MinLength,IsAlphanumeric } from "class-validator";
import { Usuario } from "../entities/usuario.entity";
import { Abogado } from "src/abogados/entities/abogado.entity";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @Length(5,30)
    @IsAlphanumeric()
    username:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsString()
    lawyer: Abogado;
}
