import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  Matches,
  IsDateString,
  IsInt,
  IsString,
} from 'class-validator';

export class CreateAppointmentDto {
  @ApiProperty()
  reason: string;

  @ApiProperty()
  @IsInt()
  patientId: number;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  startTime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  endTime: string;

  @ApiProperty()
  @IsString()
  notes: string;

  @ApiProperty()
  @IsInt()
  dentistInChargeId: number;
}
