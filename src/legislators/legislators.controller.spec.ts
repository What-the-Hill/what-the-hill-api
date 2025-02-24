import { Test, TestingModule } from '@nestjs/testing';
import { LegislatorsController } from './legislators.controller';
import { LegislatorsService } from './legislators.service';

describe('LegislatorsController', () => {
  let controller: LegislatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegislatorsController],
      providers: [LegislatorsService],
    }).compile();

    controller = module.get<LegislatorsController>(LegislatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
