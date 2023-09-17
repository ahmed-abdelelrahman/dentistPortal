import { Appointment } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { PatientEntity } from '../../patient/entities/patient.entity';

export class AppointmentEntity implements Appointment {
  @ApiProperty()
  id: number;
  @ApiProperty()
  reason: string;
  @ApiProperty()
  patientId: number;
  @ApiProperty()
  date: string;
  @ApiProperty()
  startTime: string;
  @ApiProperty()
  endTime: string;
  @ApiProperty()
  notes: string;
  @ApiProperty()
  dentistInChargeId: number;
  @ApiProperty({ type: () => PatientEntity }) // Specify the type as PatientEntity
  patient: PatientEntity; // This property represents the related patient
}
