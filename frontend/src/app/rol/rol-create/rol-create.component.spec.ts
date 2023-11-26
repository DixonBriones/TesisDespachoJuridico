import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolCreateComponent } from './rol-create.component';

describe('RolCreateComponent', () => {
  let component: RolCreateComponent;
  let fixture: ComponentFixture<RolCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolCreateComponent]
    });
    fixture = TestBed.createComponent(RolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
