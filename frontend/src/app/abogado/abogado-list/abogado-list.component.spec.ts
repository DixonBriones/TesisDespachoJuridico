import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbogadoListComponent } from './abogado-list.component';

describe('AbogadoListComponent', () => {
  let component: AbogadoListComponent;
  let fixture: ComponentFixture<AbogadoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbogadoListComponent]
    });
    fixture = TestBed.createComponent(AbogadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
