import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteHonorarioAbogadoComponent } from './reporte-honorario-abogado.component';

describe('ReporteHonorarioAbogadoComponent', () => {
  let component: ReporteHonorarioAbogadoComponent;
  let fixture: ComponentFixture<ReporteHonorarioAbogadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteHonorarioAbogadoComponent]
    });
    fixture = TestBed.createComponent(ReporteHonorarioAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
