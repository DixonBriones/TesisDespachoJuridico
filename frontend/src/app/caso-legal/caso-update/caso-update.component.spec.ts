import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoUpdateComponent } from './caso-update.component';

describe('CasoUpdateComponent', () => {
  let component: CasoUpdateComponent;
  let fixture: ComponentFixture<CasoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoUpdateComponent]
    });
    fixture = TestBed.createComponent(CasoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
