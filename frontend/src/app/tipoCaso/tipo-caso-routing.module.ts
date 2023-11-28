import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TipoCasoListComponent } from './tipo-caso-list/tipo-caso-list.component';

const routes: Routes = [
  {
    path:'',
    component: TipoCasoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoCasoRoutingModule { }
