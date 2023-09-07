import { IsNotEmpty, IsNumber, IsString, IsOptional,IsEmail } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @IsNotEmpty()
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
    @IsOptional()
    email:string;
}
