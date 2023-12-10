import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoHistorialComponent } from './pago-historial.component';

describe('PagoHistorialComponent', () => {
  let component: PagoHistorialComponent;
  let fixture: ComponentFixture<PagoHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoHistorialComponent]
    });
    fixture = TestBed.createComponent(PagoHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
