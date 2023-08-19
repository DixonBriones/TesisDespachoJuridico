import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateComponent } from './cliente-create.component';

describe('ClienteCreateComponent', () => {
  let component: ClienteCreateComponent;
  let fixture: ComponentFixture<ClienteCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCreateComponent]
    });
    fixture = TestBed.createComponent(ClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
