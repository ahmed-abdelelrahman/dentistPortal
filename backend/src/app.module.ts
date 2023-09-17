import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DrugsModule } from './drugs/drugs.module';
import { ProcduresModule } from './procdures/procdures.module';
import { InsuranceModule } from './insurance/insurance.module';
import { PaymentModule } from './payment/payment.module';
import { PatientSourceModule } from './patient-source/patient-source.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DrugsModule,
    ProcduresModule,
    InsuranceModule,
    PaymentModule,
    PatientSourceModule,
    PatientModule,
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
