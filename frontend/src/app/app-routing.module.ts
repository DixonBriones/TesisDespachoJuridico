import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

import { AuthGuard } from './guards/auth.guard';
import { CheckeloginGuard } from './guards/checkelogin.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [CheckeloginGuard]
  },
  {
    path: 'dashboard',
    component: PagesComponent,
    children:[
      {
        path:'cliente',
        loadChildren:()=> import('./cliente/cliente.module')
        .then(m=> m.ClienteModule)
      },
      {
        path:'rol',
        loadChildren:()=> import('./rol/rol.module')
        .then(m=> m.RolModule)
      },
      {
        path:'abogado',
        loadChildren:()=> import('./abogado/abogado.module')
        .then(m=> m.AbogadoModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
