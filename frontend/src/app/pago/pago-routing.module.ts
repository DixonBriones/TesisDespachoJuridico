import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoHistorialComponent } from './pago-historial/pago-historial.component';


const routes: Routes = [
  {
    path:'',
    component: PagoListComponent
  },
  {
    path:'historial/:id',
    component: PagoHistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
