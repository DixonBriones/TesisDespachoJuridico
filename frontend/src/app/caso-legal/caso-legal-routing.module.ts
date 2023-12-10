import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CasoListComponent } from './caso-list/caso-list.component';
import { MisCasosCerradosComponent } from './mis-casos-cerrados/mis-casos-cerrados.component';
import { AdminCasoCerradoComponent } from './admin-caso-cerrado/admin-caso-cerrado.component';
import { AdminCasoListComponent } from './admin-caso-list/admin-caso-list.component';


const routes: Routes = [
  {
    path:'miscasos',
    component: CasoListComponent
  },
  {
    path:'miscasos-cerrados',
    component: MisCasosCerradosComponent
  },
  {
    path:'admin/casos-cerrados',
    component: AdminCasoCerradoComponent
  },
  {
    path:'admin',
    component: AdminCasoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasoLegalRoutingModule { }
