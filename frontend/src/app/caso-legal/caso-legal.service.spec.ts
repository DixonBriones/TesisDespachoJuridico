import { TestBed } from '@angular/core/testing';

import { CasoLegalService } from './caso-legal.service';

describe('CasoLegalService', () => {
  let service: CasoLegalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasoLegalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
