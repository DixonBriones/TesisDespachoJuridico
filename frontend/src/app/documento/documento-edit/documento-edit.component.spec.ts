import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoEditComponent } from './documento-edit.component';

describe('DocumentoEditComponent', () => {
  let component: DocumentoEditComponent;
  let fixture: ComponentFixture<DocumentoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentoEditComponent]
    });
    fixture = TestBed.createComponent(DocumentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
