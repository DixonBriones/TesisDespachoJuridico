import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

import { AuthGuard } from './guards/auth.guard';
import { CheckeloginGuard } from './guards/checkelogin.guard';
import { RoleGuard } from './guards/role.guard';
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
        path: '',
        redirectTo:'/dashboard/inicio',
        pathMatch:'full'
      },
      {
        path:'inicio',
        loadChildren:()=> import('./dashboard/dashboard.module')
        .then(m=> m.DashboardModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN','ABOGADO'] }
      },
      {
        path:'cliente',
        loadChildren:()=> import('./cliente/cliente.module')
        .then(m=> m.ClienteModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN','ABOGADO'] }
      },
      {
        path:'tipo-evento',
        loadChildren:()=> import('./tipoEvento/tipo-evento.module')
        .then(m=> m.TipoEventoModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN']  }
      },
      {
        path:'tipo-caso',
        loadChildren:()=> import('./tipoCaso/tipo-caso.module')
        .then(m=> m.TipoCasoModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN']   }
      },
      {
        path:'rol',
        loadChildren:()=> import('./rol/rol.module')
        .then(m=> m.RolModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN']  }
      },
      {
        path:'abogado',
        loadChildren:()=> import('./abogado/abogado.module')
        .then(m=> m.AbogadoModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN']  }
      },
      {
        path:'casos',
        loadChildren:()=> import('./caso-legal/caso-legal.module')
        .then(m=> m.CasoLegalModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN','ABOGADO'] }
      },
      {
        path:'documento',
        loadChildren:()=> import('./documento/documento.module')
        .then(m=> m.DocumentoModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN','ABOGADO']  }
      },
      {
        path:'evento',
        loadChildren:()=> import('./evento/evento.module')
        .then(m=> m.EventoModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN','ABOGADO'] }
      },
      {
        path:'pago',
        loadChildren:()=> import('./pago/pago.module')
        .then(m=> m.PagoModule),
        canActivate: [RoleGuard],
        data: { role:['ADMIN','ABOGADO'] }
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
