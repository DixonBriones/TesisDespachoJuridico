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


@NgModule({
  declarations: [
    CasoCreateComponent,
    CasoListComponent,
    CasoEditComponent,
    CasoDetailsComponent,
    MisCasosCerradosComponent,
    AdminCasoListComponent,
    AdminCasoCerradoComponent,
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
  ]
})
export class CasoLegalModule { }
