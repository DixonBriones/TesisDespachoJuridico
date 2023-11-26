import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
