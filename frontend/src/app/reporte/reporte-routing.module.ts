import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteAbogadosCasosComponent } from './reporte-abogados-casos/reporte-abogados-casos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/dashboard/inicio',
    pathMatch:'full'
  },
  {
    path:'caso-abogado',
    component: ReporteAbogadosCasosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
