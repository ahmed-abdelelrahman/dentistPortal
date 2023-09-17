import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { describe } from 'node:test';
import { CreateAppointmentDto } from '../src/appointment/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../src/appointment/dto/update-appointment.dto';
import { CreateDrugDto } from '../src/drugs/dto/create-drug.dto';
import { UpdateDrugDto } from '../src/drugs/dto/update-drug.dto';
import { CreateInsuranceDto } from '../src/insurance/dto/create-insurance.dto';
import { UpdateInsuranceDto } from '../src/insurance/dto/update-insurance.dto';
import { CreatePatientDto } from '../src/patient/dto/create-patient.dto';
import { UpdatePatientDto } from '../src/patient/dto/update-patient.dto';
import { Gender } from '../src/patient/dto/create-patient.dto';
import { CreatePatientSourceDto } from '../src/patient-source/dto/create-patient-source.dto';
import { UpdatePatientSourceDto } from '../src/patient-source/dto/update-patient-source.dto';
import { CreatePaymentDto } from '../src/payment/dto/create-payment.dto';
import { UpdatePaymentDto } from '../src/payment/dto/update-payment.dto';
import { CreateProcdureDto } from '../src/procdures/dto/create-procdure.dto';
import { UpdateProcdureDto } from '../src/procdures/dto/update-procdure.dto';

describe('App e2e', () => {
  let prisma: PrismaService;
  let app: INestApplication;
  let accessToken: string;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(4000);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'build123@gmail.com',
      password: '123',
    };
    describe('Singup', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signup')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });
      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signup')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });
      it('should throw if no body provided', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signup')

          .expectStatus(400);
      });
      it('should signup', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Singin', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signin')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });
      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signin')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });
      it('should throw if no body provided', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signin')

          .expectStatus(400);
      });

      it('should signin', async () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .inspect()
          .stores('userAt', 'access_token');
      });
    });
  });
  describe('User', () => {
    describe('Get me', () => {
      it('should get current user', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
      });
    });
    describe('Edit user', () => {});
  });
  describe('appointments', () => {
    describe('Get appointments', () => {
      it('should get appointments', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/appointment')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create appointment ', () => {
      const dto: CreateAppointmentDto = {
        reason: 'need to continue',
        patientId: 3,
        date: new Date('2023-08-21T10:05:53.823Z'),
        startTime: new Date('2023-08-21T10:05:53.823Z'),
        endTime: new Date('2023-08-21T10:05:53.823Z'),
        notes: 'need to continue',
        dentistInChargeId: 1,
      };
      it('should create appointments', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/appointment')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   date: '2023-08-21T10:05:53.823Z',
            //   dentistInChargeId: 1,
            //   endTime: '2023-08-21T10:05:53.823Z',
            //   id: 15,
            //   notes: 'need to continue',
            //   patientId: 3,
            //   reason: 'need to continue',
            //   startTime: '2023-08-21T10:05:53.823Z',
            // })
            // .inspect()
            .stores('appointmentId', 'id')
        );
      });
    });
    describe('Get appointment by id', () => {
      it('should get appointments by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/appointment/{id}')
          .withPathParams('id', '$S{appointmentId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{appointmentId}');
      });
    });
    describe('edit appointment by id', () => {
      const dto: UpdateAppointmentDto = {
        reason: 'need to continue update',
        patientId: 3,
        date: new Date('2023-08-21T10:05:53.823Z'),
        startTime: new Date('2023-08-21T10:05:53.823Z'),
        endTime: new Date('2023-08-21T10:05:53.823Z'),
        notes: 'need to continue update',
        dentistInChargeId: 1,
      };
      it('should edit appointments by id', () => {
        return pactum
          .spec()
          .patch('http://localhost:3333/appointment/{id}')
          .withPathParams('id', '$S{appointmentId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.notes)
          .expectBodyContains(dto.reason);
        // .inspect();
      });
    });
    describe('delete appointment by id', () => {
      it('should delete appointment ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/appointment/{id}')
          .withPathParams('id', '$S{appointmentId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get appointments', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/appointment')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
  describe('drugs', () => {
    describe('Get drugs', () => {
      it('should get drugs', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/drugs')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create drug ', () => {
      const dto: CreateDrugDto = {
        generics: 'need to continue drug',
        brands: 'nona',
        dosages: 'one millimeter',
      };
      it('should create drugs', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/drugs')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   generics: 'need to continue drug',
            //   brands: 'nona',
            //   dosages: 'one millimeter',
            //   id: ,
            // })
            .inspect()
            .stores('drugId', 'id')
        );
      });
    });
    describe('Get drug by id', () => {
      it('should get drug by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/drugs/{id}')
          .withPathParams('id', '$S{drugId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{drugId}');
      });
    });
    describe('edit drug by id', () => {
      const dto: UpdateDrugDto = {
        generics: 'need to update drug',
        brands: 'nona update',
        dosages: 'one millimeter udpate',
      };
      it('should edit durgs by id', () => {
        return pactum
          .spec()
          .patch('http://localhost:3333/drugs/{id}')
          .withPathParams('id', '$S{drugId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.generics)
          .expectBodyContains(dto.brands)
          .inspect();
      });
    });
    describe('delete drug by id', () => {
      it('should delete drug ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/drugs/{id}')
          .withPathParams('id', '$S{drugId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get appointments', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/drugs')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
  describe('patients', () => {
    describe('Get patients', () => {
      it('should get patients', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/patients')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create patient ', () => {
      const dto: CreatePatientDto = {
        firstName: 'nona',
        lastName: 'abdelrhman',
        birthDay: new Date(1 / 2 / 2023),
        gender: Gender.MALE,
        contactNumber: 1111111111,
        address: 'build',
        notes: 'need to continue',
        hasAllergies: true,
        job: 'dentist',
        identificationNo: 111111111,
        emergencyName: 'build1',
        emergencyNumber: 11111,
        appointments: {
          create: [
            {
              reason: 'need to continue',
              patientId: 3,
              date: new Date('2023-08-21T10:05:53.823Z'),
              startTime: new Date('2023-08-21T10:05:53.823Z'),
              endTime: new Date('2023-08-21T10:05:53.823Z'),
              notes: 'need to continue',
              dentistInChargeId: 1,
            },
            // More appointment objects if needed
          ],
        },
      };
      it('should create patients', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/patients')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   name: 'build,',
            //   email: 'ahmed@gmail.com',
            //   address: 'build',
            //   contactNumber: '0000000',
            //   id: 5,
            // })
            .inspect()
            .stores('patientId', 'id')
        );
      });
    });
    describe('Get patient by id', () => {
      it('should get patient by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/patients/{id}')
          .withPathParams('id', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{patientId}');
      });
    });
    describe('edit patient by id', () => {
      const dto: UpdatePatientDto = {
        firstName: 'nona',
        lastName: 'abdelrhman',
        birthDay: new Date(1 / 2 / 2023),
        gender: Gender.MALE,
        contactNumber: 1111111111,
        address: 'build',
        notes: 'need to continue',
        hasAllergies: true,
        job: 'dentist',
        identificationNo: 111111111,
        emergencyName: 'build1',
        emergencyNumber: 11111,
        appointments: {
          create: [
            {
              reason: 'need to continue',
              patientId: 3,
              date: new Date('2023-08-21T10:05:53.823Z'),
              startTime: new Date('2023-08-21T10:05:53.823Z'),
              endTime: new Date('2023-08-21T10:05:53.823Z'),
              notes: 'need to continue',
              dentistInChargeId: 1,
            },
            // More appointment objects if needed
          ],
        },
      };
      it('should edit patient by id', () => {
        return pactum
          .spec()
          .patch('http://localhost:3333/patients/{id}')
          .withPathParams('id', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.lastName);
        // .inspect();
      });
    });
    describe('delete insurance by id', () => {
      it('should delete insurance ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/patients/{id}')
          .withPathParams('id', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get patients', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/patients')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
  describe('insurance', () => {
    describe('Get insurance', () => {
      it('should get insurance', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/insurance')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create insurance ', () => {
      const dto: CreateInsuranceDto = {
        name: 'build,',
        email: 'ahmed1@gmail.com',
        address: 'build',
        contactNumber: '0000000',
      };
      it('should create insurance', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/insurance')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   name: 'build,',
            //   email: 'ahmed@gmail.com',
            //   address: 'build',
            //   contactNumber: '0000000',
            //   id: 5,
            // })
            .inspect()
            .stores('insuranceId', 'id')
        );
      });
    });
    describe('Get insurance by id', () => {
      it('should get insurance by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/insurance/{id}')
          .withPathParams('id', '$S{insuranceId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{insuranceId}');
      });
    });
    describe('edit insurance by id', () => {
      const dto: UpdateInsuranceDto = {
        name: 'build,update',
        email: 'ahmed1@gmail.com',
        address: 'i try all time to test',
        contactNumber: '00000001',
      };
      it('should edit insurance by id', () => {
        return pactum
          .spec()
          .patch('http://localhost:3333/insurance/{id}')
          .withPathParams('id', '$S{insuranceId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.name)
          .inspect();
      });
    });
    describe('delete insurance by id', () => {
      it('should delete insurance ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/insurance/{id}')
          .withPathParams('id', '$S{insuranceId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get insurance', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/insurance')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
  describe('patientSource', () => {
    describe('Get patientSource', () => {
      it('should get patientSource', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/patientSource')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create patientSource ', () => {
      const dto: CreatePatientSourceDto = {
        name: 'build,',
      };
      it('should create patientSource', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/patientSource')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   name: 'build,',
            // })
            .inspect()
            .stores('patientSourceId', 'id')
        );
      });
    });
    describe('Get patientSource by id', () => {
      it('should get patientSource by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/patientSource/{id}')
          .withPathParams('id', '$S{patientSourceId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{patientSourceId}');
      });
    });

    describe('delete patientSource by id', () => {
      it('should delete patientSource ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/patientSource/{id}')
          .withPathParams('id', '$S{patientSourceId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get patientSource', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/patientSource')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
  describe('procdures', () => {
    describe('Get procdures', () => {
      it('should get procdures', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/procdures')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create procdure ', () => {
      const dto: CreateProcdureDto = {
        name: 'need to continue work on procdure',
        amount: 3,
      };
      it('should create procdures', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/procdures')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   name: 'build,',
            // })
            .inspect()
            .stores('procdureId', 'id')
        );
      });
    });
    describe('Get procdures by id', () => {
      it('should get procdures by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/procdures/{id}')
          .withPathParams('id', '$S{procdureId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{procdureId}');
      });
    });
    describe('edit procdure by id', () => {
      const dto: UpdateProcdureDto = {
        name: 'need to update procdure',
        amount: 4,
      };
      it('should edit procdure by id', () => {
        return pactum
          .spec()
          .patch('http://localhost:3333/procdures/{id}')
          .withPathParams('id', '$S{procdureId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.name);

        // .inspect();
      });
    });
    describe('delete procdure by id', () => {
      it('should delete procdure ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/procdures/{id}')
          .withPathParams('id', '$S{procdureId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get procdures', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/procdures')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
  describe('payment', () => {
    describe('Get payment', () => {
      it('should get payment', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/payment')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });

    describe('create payment ', () => {
      const dto: CreatePaymentDto = {
        paymentName: 'bank',
      };
      it('should create payment', () => {
        return (
          pactum
            .spec()
            .post('http://localhost:3333/payment')
            .withHeaders({
              Authorization: 'Bearer $S{userAt}',
            })
            .withBody(dto)
            .expectStatus(201)
            // .expectBody({
            //   name: 'build,',
            // })
            .inspect()
            .stores('paymentId', 'id')
        );
      });
    });
    describe('Get payment by id', () => {
      it('should get payment by id', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/payment/{id}')
          .withPathParams('id', '$S{paymentId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{paymentId}');
      });
    });
    describe('edit payment by id', () => {
      const dto: UpdatePaymentDto = {
        paymentName: 'bank,update',
      };
      it('should edit payment by id', () => {
        return pactum
          .spec()
          .patch('http://localhost:3333/payment/{id}')
          .withPathParams('id', '$S{paymentId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.paymentName);

        // .inspect();
      });
    });
    describe('delete payment by id', () => {
      it('should delete payment ', () => {
        return pactum
          .spec()
          .delete('http://localhost:3333/payment/{id}')
          .withPathParams('id', '$S{paymentId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('should get payment', () => {
        return pactum
          .spec()
          .get('http://localhost:3333/payment')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        // .expectBody([]);
      });
    });
  });
});
