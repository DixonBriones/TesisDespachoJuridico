import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEditComponent } from './pago-edit.component';

describe('PagoEditComponent', () => {
  let component: PagoEditComponent;
  let fixture: ComponentFixture<PagoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoEditComponent]
    });
    fixture = TestBed.createComponent(PagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
