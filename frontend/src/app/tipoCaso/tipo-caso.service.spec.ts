import { TestBed } from '@angular/core/testing';

import { TipoCasoService } from './tipo-caso.service';

describe('TipoCasoService', () => {
  let service: TipoCasoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCasoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
