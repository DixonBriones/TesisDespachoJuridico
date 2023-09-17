import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbogadoCreateComponent } from './abogado-create.component';

describe('AbogadoCreateComponent', () => {
  let component: AbogadoCreateComponent;
  let fixture: ComponentFixture<AbogadoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbogadoCreateComponent]
    });
    fixture = TestBed.createComponent(AbogadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
