import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoListFinalizadoComponent } from './pago-list-finalizado.component';

describe('PagoListFinalizadoComponent', () => {
  let component: PagoListFinalizadoComponent;
  let fixture: ComponentFixture<PagoListFinalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoListFinalizadoComponent]
    });
    fixture = TestBed.createComponent(PagoListFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
