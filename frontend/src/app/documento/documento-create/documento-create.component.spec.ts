import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoCreateComponent } from './documento-create.component';

describe('DocumentoCreateComponent', () => {
  let component: DocumentoCreateComponent;
  let fixture: ComponentFixture<DocumentoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentoCreateComponent]
    });
    fixture = TestBed.createComponent(DocumentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
