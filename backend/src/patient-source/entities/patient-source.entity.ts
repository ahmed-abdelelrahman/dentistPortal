import { ApiProperty } from '@nestjs/swagger';
import { patientSource } from '@prisma/client';
import { IsString } from 'class-validator';

export class PatientSourceEntity implements patientSource {
  id: number;
  @ApiProperty()
  @IsString()
  name: string;
}
