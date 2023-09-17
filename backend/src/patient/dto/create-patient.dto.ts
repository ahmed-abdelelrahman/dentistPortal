import { ApiProperty } from '@nestjs/swagger';

import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateAppointmentDto } from 'src/appointment/dto/create-appointment.dto';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
}

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  firstName: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastName: string;

  @ApiProperty()
  @IsDateString()
  birthDay: Date;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty()
  @IsInt()
  contactNumber: number;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  notes: string;

  @ApiProperty()
  @IsBoolean()
  hasAllergies: boolean;

  @ApiProperty()
  @IsString()
  job: string;

  @ApiProperty()
  @IsInt()
  identificationNo: number;

  @ApiProperty()
  @IsString()
  emergencyName: string;

  @ApiProperty()
  @IsInt()
  emergencyNumber: number;

  @ApiProperty()
  // @IsArray()
  @ValidateNested({ each: true })
  appointments: {
    create: CreateAppointmentDto[];
  };
}
