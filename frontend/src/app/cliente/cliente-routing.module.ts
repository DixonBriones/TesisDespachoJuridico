import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

const routes: Routes = [
  {
    path:'clientes',
    component: ClienteListComponent
  },
  {
    path:'cliente/:id',
    component: ClienteDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }