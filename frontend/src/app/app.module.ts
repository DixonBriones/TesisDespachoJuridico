import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es'; 
import { registerLocaleData } from '@angular/common';

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


registerLocaleData(localeEs);

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
    CasoLegalModule,
    BrowserAnimationsModule,
  ],
  providers: [ 
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    //{provide: LOCALE_ID, useValue: 'es'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
