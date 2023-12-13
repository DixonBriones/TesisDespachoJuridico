import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoReasignarComponent } from './caso-reasignar.component';

describe('CasoReasignarComponent', () => {
  let component: CasoReasignarComponent;
  let fixture: ComponentFixture<CasoReasignarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoReasignarComponent]
    });
    fixture = TestBed.createComponent(CasoReasignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
