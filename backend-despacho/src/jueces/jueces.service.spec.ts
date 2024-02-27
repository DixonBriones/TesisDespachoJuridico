import { Test, TestingModule } from '@nestjs/testing';
import { JuecesService } from './jueces.service';

describe('JuecesService', () => {
  let service: JuecesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuecesService],
    }).compile();

    service = module.get<JuecesService>(JuecesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
