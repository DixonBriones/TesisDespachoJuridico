import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}