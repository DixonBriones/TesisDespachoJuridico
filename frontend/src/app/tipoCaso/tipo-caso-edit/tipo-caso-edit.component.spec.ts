import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCasoEditComponent } from './tipo-caso-edit.component';

describe('TipoCasoEditComponent', () => {
  let component: TipoCasoEditComponent;
  let fixture: ComponentFixture<TipoCasoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoCasoEditComponent]
    });
    fixture = TestBed.createComponent(TipoCasoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
