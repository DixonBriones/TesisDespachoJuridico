import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min } from "class-validator";

export class CreateTipoCasoDto {
    @IsString()
    @IsNotEmpty()
    name:string;
}
