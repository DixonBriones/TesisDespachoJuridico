import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteAbogadosCasosComponent } from './reporte-abogados-casos/reporte-abogados-casos.component';
import { ReporteRoutingModule } from './reporte-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReporteHonorarioAbogadoComponent } from './reporte-honorario-abogado/reporte-honorario-abogado.component';



@NgModule({
  declarations: [
    ReporteAbogadosCasosComponent,
    ReporteHonorarioAbogadoComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReporteModule { }
