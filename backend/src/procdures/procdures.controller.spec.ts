import { Test, TestingModule } from '@nestjs/testing';
import { ProcduresController } from './procdures.controller';
import { ProcduresService } from './procdures.service';

describe('ProcduresController', () => {
  let controller: ProcduresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcduresController],
      providers: [ProcduresService],
    }).compile();

    controller = module.get<ProcduresController>(ProcduresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
