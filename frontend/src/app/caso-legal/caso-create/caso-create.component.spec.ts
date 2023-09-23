import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoCreateComponent } from './caso-create.component';

describe('CasoCreateComponent', () => {
  let component: CasoCreateComponent;
  let fixture: ComponentFixture<CasoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoCreateComponent]
    });
    fixture = TestBed.createComponent(CasoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
