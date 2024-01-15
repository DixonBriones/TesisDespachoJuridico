import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteAbogadosCasosComponent } from './reporte-abogados-casos/reporte-abogados-casos.component';
import { ReporteHonorarioAbogadoComponent } from './reporte-honorario-abogado/reporte-honorario-abogado.component';

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
  {
    path:'honorario-abogado',
    component: ReporteHonorarioAbogadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
