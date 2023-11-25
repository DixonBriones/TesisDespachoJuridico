import { Test, TestingModule } from '@nestjs/testing';
import { TipoCasoService } from './tipo_caso.service';

describe('TipoCasoService', () => {
  let service: TipoCasoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCasoService],
    }).compile();

    service = module.get<TipoCasoService>(TipoCasoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
