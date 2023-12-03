import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoRoutingModule } from './pago-routing.module';
import { PagoCreateComponent } from './pago-create/pago-create.component';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoEditComponent } from './pago-edit/pago-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PagoCreateComponent,
    PagoListComponent,
    PagoEditComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    NgxPaginationModule,
  ]
})
export class PagoModule { }
