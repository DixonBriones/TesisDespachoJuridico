import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoEditComponent } from './caso-edit.component';

describe('CasoEditComponent', () => {
  let component: CasoEditComponent;
  let fixture: ComponentFixture<CasoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoEditComponent]
    });
    fixture = TestBed.createComponent(CasoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
