import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CasoListComponent } from './caso-list/caso-list.component';


const routes: Routes = [
  {
    path:'miscasos',
    component: CasoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasoLegalRoutingModule { }
