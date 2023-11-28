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
        path:'tipo-evento',
        loadChildren:()=> import('./tipoEvento/tipo-evento.module')
        .then(m=> m.TipoEventoModule)
      },
      {
        path:'tipo-caso',
        loadChildren:()=> import('./tipoCaso/tipo-caso.module')
        .then(m=> m.TipoCasoModule)
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
      },
      {
        path:'casos',
        loadChildren:()=> import('./caso-legal/caso-legal.module')
        .then(m=> m.CasoLegalModule)
      }
    ],
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
