import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbogadoEditComponent } from './abogado-edit.component';

describe('AbogadoEditComponent', () => {
  let component: AbogadoEditComponent;
  let fixture: ComponentFixture<AbogadoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbogadoEditComponent]
    });
    fixture = TestBed.createComponent(AbogadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
