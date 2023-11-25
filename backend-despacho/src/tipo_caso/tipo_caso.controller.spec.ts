import { Test, TestingModule } from '@nestjs/testing';
import { TipoCasoController } from './tipo_caso.controller';
import { TipoCasoService } from './tipo_caso.service';

describe('TipoCasoController', () => {
  let controller: TipoCasoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoCasoController],
      providers: [TipoCasoService],
    }).compile();

    controller = module.get<TipoCasoController>(TipoCasoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
