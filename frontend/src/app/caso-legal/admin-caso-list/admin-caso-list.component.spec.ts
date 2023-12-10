import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCasoListComponent } from './admin-caso-list.component';

describe('AdminCasoListComponent', () => {
  let component: AdminCasoListComponent;
  let fixture: ComponentFixture<AdminCasoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCasoListComponent]
    });
    fixture = TestBed.createComponent(AdminCasoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
