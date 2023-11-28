import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCasoCreateComponent } from './tipo-caso-create.component';

describe('TipoCasoCreateComponent', () => {
  let component: TipoCasoCreateComponent;
  let fixture: ComponentFixture<TipoCasoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoCasoCreateComponent]
    });
    fixture = TestBed.createComponent(TipoCasoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
