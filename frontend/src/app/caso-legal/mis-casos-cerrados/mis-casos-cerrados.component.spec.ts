import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCasosCerradosComponent } from './mis-casos-cerrados.component';

describe('MisCasosCerradosComponent', () => {
  let component: MisCasosCerradosComponent;
  let fixture: ComponentFixture<MisCasosCerradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisCasosCerradosComponent]
    });
    fixture = TestBed.createComponent(MisCasosCerradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
