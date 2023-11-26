import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolListComponent } from './rol-list/rol-list.component';

const routes: Routes = [
  {
    path:'',
    component: RolListComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
