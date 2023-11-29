import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';
import { ClienteModule } from './cliente/cliente.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AbogadoModule } from './abogado/abogado.module';
import { RolModule } from './rol/rol.module';
import { TipoCasoModule } from './tipoCaso/tipo-caso.module';
import { TipoEventoModule } from './tipoEvento/tipo-evento.module';
import { CasoLegalModule } from './caso-legal/caso-legal.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule,
    ClienteModule,
    AuthModule,
    AbogadoModule,
    RolModule,
    TipoCasoModule,
    TipoEventoModule,
    CasoLegalModule
  ],
  providers: [ 
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
