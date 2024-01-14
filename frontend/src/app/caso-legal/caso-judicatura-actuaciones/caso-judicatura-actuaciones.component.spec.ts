import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoJudicaturaActuacionesComponent } from './caso-judicatura-actuaciones.component';

describe('CasoJudicaturaActuacionesComponent', () => {
  let component: CasoJudicaturaActuacionesComponent;
  let fixture: ComponentFixture<CasoJudicaturaActuacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoJudicaturaActuacionesComponent]
    });
    fixture = TestBed.createComponent(CasoJudicaturaActuacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
