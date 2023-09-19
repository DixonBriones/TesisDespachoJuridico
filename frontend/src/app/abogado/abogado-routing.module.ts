import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbogadoListComponent } from './abogado-list/abogado-list.component';
import { AbogadoDetailsComponent } from './abogado-details/abogado-details.component';

const routes: Routes = [
  {
    path:'',
    component: AbogadoListComponent
  },
  {
    path:':id',
    component: AbogadoDetailsComponent
  }


];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AbogadoRoutingModule { }
