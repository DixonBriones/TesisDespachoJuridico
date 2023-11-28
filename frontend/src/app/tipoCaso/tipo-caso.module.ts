import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoCasoRoutingModule } from './tipo-caso-routing.module';
import { TipoCasoListComponent } from './tipo-caso-list/tipo-caso-list.component';
import { TipoCasoEditComponent } from './tipo-caso-edit/tipo-caso-edit.component';
import { TipoCasoCreateComponent } from './tipo-caso-create/tipo-caso-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TipoCasoListComponent,
    TipoCasoEditComponent,
    TipoCasoCreateComponent
  ],
  imports: [
    CommonModule,
    TipoCasoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    NgxPaginationModule,
  ]
})
export class TipoCasoModule { }
