import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
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

  buscarAbogadoCedula(id:string) {
    return this.http.get(`${this.URL}/abogado/identificacion/${id}`);
  }

  mostrarCasos(query = '') {
    return this.http.get(`${this.URL}/caso-legal/admin/casos`,{ params: { q: query }});
  }

  mostrarCasosCerrados(query = '') {
    return this.http.get(`${this.URL}/caso-legal/admin/casos-cerrados`,{ params: { q: query }});
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

  eliminarCaso(id:string) {
    return this.http.delete(`${this.URL}/caso-legal/realRemove/${id}`);
  }

  mostrarCasoCompleto(id:any) {
    return this.http.get(`${this.URL}/caso-legal/full/${id}`);
  }


  //Consejo de la judicatura
  mostrarCasoJudicatura(id:any) {
    return this.http.get(`https://api.funcionjudicial.gob.ec/informacion/getIncidenteJudicatura/${id}`);
  }

  mostrarActuaciones(body:any) {
    return this.http.post(`https://api.funcionjudicial.gob.ec/informacion/actuacionesJudiciales`,body);
  }

  private datosFuente = new BehaviorSubject<any>(null);
  datosCompartidos = this.datosFuente.asObservable();

  enviarDatos(datos: any) {
    this.datosFuente.next(datos);
  }
}
