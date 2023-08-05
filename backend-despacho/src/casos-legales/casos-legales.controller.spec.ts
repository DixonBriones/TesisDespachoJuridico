import { Test, TestingModule } from '@nestjs/testing';
import { CasosLegalesController } from './casos-legales.controller';
import { CasosLegalesService } from './casos-legales.service';

describe('CasosLegalesController', () => {
  let controller: CasosLegalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CasosLegalesController],
      providers: [CasosLegalesService],
    }).compile();

    controller = module.get<CasosLegalesController>(CasosLegalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
