import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasoCreateComponent } from './caso-create/caso-create.component';
import { CasoListComponent } from './caso-list/caso-list.component';
import { CasoDetailsComponent } from './caso-details/caso-details.component';
import { CasoLegalRoutingModule } from './caso-legal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { CasoEditComponent } from './caso-edit/caso-edit.component';
import { MisCasosCerradosComponent } from './mis-casos-cerrados/mis-casos-cerrados.component';
import { AdminCasoListComponent } from './admin-caso-list/admin-caso-list.component';
import { AdminCasoCerradoComponent } from './admin-caso-cerrado/admin-caso-cerrado.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CasoReasignarComponent } from './caso-reasignar/caso-reasignar.component';
import { CasoJudicaturaComponent } from './caso-judicatura/caso-judicatura.component';
import { CasoJudicaturaActuacionesComponent } from './caso-judicatura-actuaciones/caso-judicatura-actuaciones.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    CasoCreateComponent,
    CasoListComponent,
    CasoEditComponent,
    CasoDetailsComponent,
    MisCasosCerradosComponent,
    AdminCasoListComponent,
    AdminCasoCerradoComponent,
    CasoReasignarComponent,
    CasoJudicaturaComponent,
    CasoJudicaturaActuacionesComponent,
  ],
  imports: [
    CommonModule,
    CasoLegalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    NgxPaginationModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class CasoLegalModule { }
