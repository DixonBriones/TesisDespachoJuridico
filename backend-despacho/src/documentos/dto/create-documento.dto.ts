import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min } from "class-validator";
import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";

export class CreateDocumentoDto {

    @IsString()
    @IsOptional()
    name_document: string;
    
    @IsString()
    @IsOptional()
    description: string;
    
    @IsString()
    @IsOptional()
    path: string;

    @IsOptional()
    file: any;

    @IsNotEmpty()
    legal_case:CasoLegal;
  
}
