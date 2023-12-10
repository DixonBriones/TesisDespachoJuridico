import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CasoListComponent } from './caso-list/caso-list.component';
import { MisCasosCerradosComponent } from './mis-casos-cerrados/mis-casos-cerrados.component';


const routes: Routes = [
  {
    path:'miscasos',
    component: CasoListComponent
  },
  {
    path:'miscasos-cerrados',
    component: MisCasosCerradosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasoLegalRoutingModule { }
