import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min } from "class-validator";
export class CreateJueceDto {
    @IsString()
    @IsNotEmpty()
    name:string;
}
