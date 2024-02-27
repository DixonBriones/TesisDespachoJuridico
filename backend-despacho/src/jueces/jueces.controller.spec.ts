import { Test, TestingModule } from '@nestjs/testing';
import { JuecesController } from './jueces.controller';
import { JuecesService } from './jueces.service';

describe('JuecesController', () => {
  let controller: JuecesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuecesController],
      providers: [JuecesService],
    }).compile();

    controller = module.get<JuecesController>(JuecesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
