import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoJudicaturaComponent } from './caso-judicatura.component';

describe('CasoJudicaturaComponent', () => {
  let component: CasoJudicaturaComponent;
  let fixture: ComponentFixture<CasoJudicaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoJudicaturaComponent]
    });
    fixture = TestBed.createComponent(CasoJudicaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
