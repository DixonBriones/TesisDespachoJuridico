import { Test, TestingModule } from '@nestjs/testing';
import { AbogadosController } from './abogados.controller';
import { AbogadosService } from './abogados.service';

describe('AbogadosController', () => {
  let controller: AbogadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbogadosController],
      providers: [AbogadosService],
    }).compile();

    controller = module.get<AbogadosController>(AbogadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
