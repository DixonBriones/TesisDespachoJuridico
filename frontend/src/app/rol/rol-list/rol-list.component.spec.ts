import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolListComponent } from './rol-list.component';

describe('RolListComponent', () => {
  let component: RolListComponent;
  let fixture: ComponentFixture<RolListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolListComponent]
    });
    fixture = TestBed.createComponent(RolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
