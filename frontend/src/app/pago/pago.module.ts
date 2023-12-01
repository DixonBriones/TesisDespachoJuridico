import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoRoutingModule } from './pago-routing.module';
import { PagoCreateComponent } from './pago-create/pago-create.component';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoEditComponent } from './pago-edit/pago-edit.component';



@NgModule({
  declarations: [
    PagoCreateComponent,
    PagoListComponent,
    PagoEditComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule
  ]
})
export class PagoModule { }
