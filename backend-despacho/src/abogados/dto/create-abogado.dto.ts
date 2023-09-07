import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail } from "class-validator";

export class CreateAbogadoDto {
    @IsString()
    @IsNotEmpty()
    @Max(10)
    identification:string;
    
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    address:string;

    @IsString()
    @IsNotEmpty()
    @Max(10)
    phone:string;

    @IsString()
    @IsEmail()
    email:string;
}
