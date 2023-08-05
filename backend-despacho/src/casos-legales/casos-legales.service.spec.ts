import { Test, TestingModule } from '@nestjs/testing';
import { CasosLegalesService } from './casos-legales.service';

describe('CasosLegalesService', () => {
  let service: CasosLegalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasosLegalesService],
    }).compile();

    service = module.get<CasosLegalesService>(CasosLegalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
