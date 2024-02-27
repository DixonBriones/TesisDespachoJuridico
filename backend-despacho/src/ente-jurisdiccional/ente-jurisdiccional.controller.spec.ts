import { Test, TestingModule } from '@nestjs/testing';
import { EnteJurisdiccionalController } from './ente-jurisdiccional.controller';
import { EnteJurisdiccionalService } from './ente-jurisdiccional.service';

describe('EnteJurisdiccionalController', () => {
  let controller: EnteJurisdiccionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnteJurisdiccionalController],
      providers: [EnteJurisdiccionalService],
    }).compile();

    controller = module.get<EnteJurisdiccionalController>(EnteJurisdiccionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
