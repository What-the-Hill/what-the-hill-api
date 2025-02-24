import { Test, TestingModule } from '@nestjs/testing';
import { LegislatorsService } from './legislators.service';

describe('LegislatorsService', () => {
  let service: LegislatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegislatorsService],
    }).compile();

    service = module.get<LegislatorsService>(LegislatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
