import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEditComponent } from './evento-edit.component';

describe('EventoEditComponent', () => {
  let component: EventoEditComponent;
  let fixture: ComponentFixture<EventoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoEditComponent]
    });
    fixture = TestBed.createComponent(EventoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
