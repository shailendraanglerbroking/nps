import { Test, TestingModule } from '@nestjs/testing';
import { NpsController } from './nps.controller';
import { NpsService } from './nps.service';

describe('NpsController', () => {
  let controller: NpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NpsController],
      providers: [NpsService],
    }).compile();

    controller = module.get<NpsController>(NpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
