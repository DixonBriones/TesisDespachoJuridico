import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCasoListComponent } from './tipo-caso-list.component';

describe('TipoCasoListComponent', () => {
  let component: TipoCasoListComponent;
  let fixture: ComponentFixture<TipoCasoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoCasoListComponent]
    });
    fixture = TestBed.createComponent(TipoCasoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
