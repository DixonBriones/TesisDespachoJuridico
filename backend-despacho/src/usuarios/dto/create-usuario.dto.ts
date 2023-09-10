import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min,MinLength,IsAlphanumeric } from "class-validator";

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
}
