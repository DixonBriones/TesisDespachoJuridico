import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CasoLegalService {
  private URL = environment.rutaService;
  decodedToken:any;
  token:any;

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

  mostrarTiposCaso() {
    return this.http.get(`${this.URL}/tipo-caso`);
  }

  mostrarUserID(id:any) {
    return this.http.get(`${this.URL}/usuario/${id}`);
  }

  buscarClienteCedula(id:string) {
    return this.http.get(`${this.URL}/cliente/identificacion/${id}`);
  }

  mostrarMisCasos(query = '') {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    return this.http.get(`${this.URL}/caso-legal/abogadoId/${this.decodedToken.idAbogado}`,{ params: { q: query }});
  }

  mostrarMisCasosCerrados(query = '') {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    return this.http.get(`${this.URL}/caso-legal/abogadoIdCerrado/${this.decodedToken.idAbogado}`,{ params: { q: query }});
  }

  insertarMiCaso(body:any) {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    body.lawyer=this.decodedToken.idAbogado;
    return this.http.post(`${this.URL}/caso-legal`,body);
  }

  actualizarCaso(id:string,body:any) {
    return this.http.patch(`${this.URL}/caso-legal/${id}`,body);
  }

  eliminarTipoCaso(id:string) {
    return this.http.delete(`${this.URL}/caso-legal/${id}`);
  }
}
