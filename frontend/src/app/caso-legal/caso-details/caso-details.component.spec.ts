import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoDetailsComponent } from './caso-details.component';

describe('CasoDetailsComponent', () => {
  let component: CasoDetailsComponent;
  let fixture: ComponentFixture<CasoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoDetailsComponent]
    });
    fixture = TestBed.createComponent(CasoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
