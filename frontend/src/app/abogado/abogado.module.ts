import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbogadoCreateComponent } from './abogado-create/abogado-create.component';
import { AbogadoDetailsComponent } from './abogado-details/abogado-details.component';
import { AbogadoEditComponent } from './abogado-edit/abogado-edit.component';
import { AbogadoListComponent } from './abogado-list/abogado-list.component';
import { AbogadoRoutingModule } from './abogado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AbogadoCreateComponent,
    AbogadoDetailsComponent,
    AbogadoEditComponent,
    AbogadoListComponent
  ],
  imports: [
    CommonModule,
    AbogadoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule
  ]
})
export class AbogadoModule { }
