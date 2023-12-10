import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCasoCerradoComponent } from './admin-caso-cerrado.component';

describe('AdminCasoCerradoComponent', () => {
  let component: AdminCasoCerradoComponent;
  let fixture: ComponentFixture<AdminCasoCerradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCasoCerradoComponent]
    });
    fixture = TestBed.createComponent(AdminCasoCerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
