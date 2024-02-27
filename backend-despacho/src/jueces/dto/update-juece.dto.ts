import { PartialType } from '@nestjs/mapped-types';
import { CreateJueceDto } from './create-juece.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateJueceDto extends PartialType(CreateJueceDto) {
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
