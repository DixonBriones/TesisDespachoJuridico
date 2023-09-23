import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoListComponent } from './caso-list.component';

describe('CasoListComponent', () => {
  let component: CasoListComponent;
  let fixture: ComponentFixture<CasoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoListComponent]
    });
    fixture = TestBed.createComponent(CasoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
