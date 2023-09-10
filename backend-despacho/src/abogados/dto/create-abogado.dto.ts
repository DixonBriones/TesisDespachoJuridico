import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min } from "class-validator";

export class CreateAbogadoDto {
    @IsString()
    @IsNotEmpty()
    @Length(10,10)
    identification:string;
    
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    address:string;

    @IsString()
    @IsNotEmpty()
    phone:string;

    @IsString()
    @IsEmail()
    email:string;
}
