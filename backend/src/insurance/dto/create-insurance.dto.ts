import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  MinLength,
  IsEmail,
  MaxLength,
} from 'class-validator';

export class CreateInsuranceDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @MaxLength(11)
  contactNumber: string;
}
