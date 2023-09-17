import { $Enums, Patient } from '@prisma/client';
import { AppointmentEntity } from '../../appointment/entities/appointment.entity';
import { OneToMany } from 'typeorm';
export class PatientEntity implements Patient {
  id: number;
  firstName: string;
  lastName: string;
  birthDay: Date;
  gender: $Enums.Gender;
  contactNumber: number;
  address: string;
  notes: string;
  hasAllergies: boolean;
  job: string;
  identificationNo: number;
  emergencyName: string;
  emergencyNumber: number;

  @OneToMany(() => AppointmentEntity, (appointment) => appointment.patient)
  appointments: AppointmentEntity[];
}
