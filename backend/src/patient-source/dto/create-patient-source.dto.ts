import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePatientSourceDto {
  @ApiProperty()
  @IsString()
  name: string;
}
