import { Module } from '@nestjs/common';
import { InsuranceService } from './insurance.service';
import { InsuranceController } from './insurance.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [InsuranceController],
  providers: [InsuranceService],
  imports: [PrismaModule],
})
export class InsuranceModule {}
