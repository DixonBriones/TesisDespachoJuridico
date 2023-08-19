import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteRoutingModule } from './cliente-routing.module';



@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteListComponent,
    ClienteDetailsComponent,
    ClienteEditComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
