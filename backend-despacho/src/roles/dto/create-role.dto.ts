import { IsNotEmpty, IsNumber, IsString, IsOptional,Length, Max,IsEmail,Min } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    description:string;
}
