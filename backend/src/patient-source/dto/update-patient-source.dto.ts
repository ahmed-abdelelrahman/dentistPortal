import { PartialType } from '@nestjs/swagger';
import { CreatePatientSourceDto } from './create-patient-source.dto';

export class UpdatePatientSourceDto extends PartialType(CreatePatientSourceDto) {}
