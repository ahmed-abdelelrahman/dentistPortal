import { Injectable } from '@nestjs/common';
import { CreatePatientSourceDto } from './dto/create-patient-source.dto';
import { UpdatePatientSourceDto } from './dto/update-patient-source.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientSourceService {
  constructor(private prisma: PrismaService) {}
  create(createPatientSourceDto: CreatePatientSourceDto) {
    return this.prisma.patientSource.create({ data: createPatientSourceDto });
  }

  findAll() {
    return this.prisma.patientSource.findMany();
  }

  findOne(id: number) {
    return this.prisma.patientSource.findUnique({ where: { id } });
  }

  update(id: number, updatePatientSourceDto: UpdatePatientSourceDto) {
    return this.prisma.patientSource.update({
      where: { id },
      data: updatePatientSourceDto,
    });
  }

  remove(id: number) {
    return this.prisma.patientSource.delete({ where: { id } });
  }
}
