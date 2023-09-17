import { Test, TestingModule } from '@nestjs/testing';
import { PatientSourceService } from './patient-source.service';

describe('PatientSourceService', () => {
  let service: PatientSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientSourceService],
    }).compile();

    service = module.get<PatientSourceService>(PatientSourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
