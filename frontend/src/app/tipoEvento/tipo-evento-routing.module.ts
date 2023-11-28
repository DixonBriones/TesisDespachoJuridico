import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TipoEventoListComponent } from './tipo-evento-list/tipo-evento-list.component';

const routes: Routes = [
  {
    path:'',
    component: TipoEventoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEventoRoutingModule { }
