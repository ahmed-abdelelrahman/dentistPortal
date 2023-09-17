import { Module } from '@nestjs/common';
import { PatientSourceService } from './patient-source.service';
import { PatientSourceController } from './patient-source.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PatientSourceController],
  providers: [PatientSourceService],
  imports: [PrismaModule],
})
export class PatientSourceModule {}
