import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbogadoDetailsComponent } from './abogado-details.component';

describe('AbogadoDetailsComponent', () => {
  let component: AbogadoDetailsComponent;
  let fixture: ComponentFixture<AbogadoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbogadoDetailsComponent]
    });
    fixture = TestBed.createComponent(AbogadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
