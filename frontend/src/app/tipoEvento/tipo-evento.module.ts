import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoEventoListComponent } from './tipo-evento-list/tipo-evento-list.component';
import { TipoEventoRoutingModule } from './tipo-evento-routing.module';
import { TipoEventoEditComponent } from './tipo-evento-edit/tipo-evento-edit.component';
import { TipoEventoCreateComponent } from './tipo-evento-create/tipo-evento-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TipoEventoListComponent,
    TipoEventoEditComponent,
    TipoEventoCreateComponent
  ],
  imports: [
    CommonModule,
    TipoEventoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class TipoEventoModule { }
