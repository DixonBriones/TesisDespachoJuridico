import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

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
    @IsOptional()
    email:string;
}
