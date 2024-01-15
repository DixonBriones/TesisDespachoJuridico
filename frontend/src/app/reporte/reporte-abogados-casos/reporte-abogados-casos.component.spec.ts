import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAbogadosCasosComponent } from './reporte-abogados-casos.component';

describe('ReporteAbogadosCasosComponent', () => {
  let component: ReporteAbogadosCasosComponent;
  let fixture: ComponentFixture<ReporteAbogadosCasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteAbogadosCasosComponent]
    });
    fixture = TestBed.createComponent(ReporteAbogadosCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
