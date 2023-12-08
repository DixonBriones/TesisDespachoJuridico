import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoListComponent } from './documento-list/documento-list.component';
import { DocumentoCreateComponent } from './documento-create/documento-create.component';
import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DocumentoListComponent,
    DocumentoCreateComponent,
    DocumentoEditComponent
  ],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class DocumentoModule { }
