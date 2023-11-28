import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEventoEditComponent } from './tipo-evento-edit.component';

describe('TipoEventoEditComponent', () => {
  let component: TipoEventoEditComponent;
  let fixture: ComponentFixture<TipoEventoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoEventoEditComponent]
    });
    fixture = TestBed.createComponent(TipoEventoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
