import { Test, TestingModule } from '@nestjs/testing';
import { AbogadosService } from './abogados.service';

describe('AbogadosService', () => {
  let service: AbogadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbogadosService],
    }).compile();

    service = module.get<AbogadosService>(AbogadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
