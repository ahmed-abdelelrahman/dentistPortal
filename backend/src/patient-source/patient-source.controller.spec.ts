import { Test, TestingModule } from '@nestjs/testing';
import { PatientSourceController } from './patient-source.controller';
import { PatientSourceService } from './patient-source.service';

describe('PatientSourceController', () => {
  let controller: PatientSourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientSourceController],
      providers: [PatientSourceService],
    }).compile();

    controller = module.get<PatientSourceController>(PatientSourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
