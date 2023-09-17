import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbogadoCreateComponent } from './abogado-create/abogado-create.component';
import { AbogadoDetailsComponent } from './abogado-details/abogado-details.component';
import { AbogadoEditComponent } from './abogado-edit/abogado-edit.component';
import { AbogadoListComponent } from './abogado-list/abogado-list.component';



@NgModule({
  declarations: [
    AbogadoCreateComponent,
    AbogadoDetailsComponent,
    AbogadoEditComponent,
    AbogadoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AbogadoModule { }
