import { Test, TestingModule } from '@nestjs/testing';
import { EnteJurisdiccionalService } from './ente-jurisdiccional.service';

describe('EnteJurisdiccionalService', () => {
  let service: EnteJurisdiccionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnteJurisdiccionalService],
    }).compile();

    service = module.get<EnteJurisdiccionalService>(EnteJurisdiccionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
