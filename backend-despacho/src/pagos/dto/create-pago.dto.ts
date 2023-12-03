import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min ,IsDateString} from "class-validator";
import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";

export class CreatePagoDto {

    @IsNumber()
    amount:number;

    @IsNotEmpty()
    @IsDateString()
    date_payment: Date;

    @IsNotEmpty()
    legal_case:CasoLegal;
}
