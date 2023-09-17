import { Test, TestingModule } from '@nestjs/testing';
import { ProcduresService } from './procdures.service';

describe('ProcduresService', () => {
  let service: ProcduresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcduresService],
    }).compile();

    service = module.get<ProcduresService>(ProcduresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
