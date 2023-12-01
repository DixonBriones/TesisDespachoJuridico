import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private URL = environment.rutaService;
  decodedToken:any;
  token:any;
  data:any=[]


  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

  mostrarEventoAbogado() {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    return this.http.get<any[]>(`${this.URL}/evento/abogado/${this.decodedToken.idAbogado}`);
  }

  mostrarTipoEvento() {
    return this.http.get(`${this.URL}/tipo-evento`);
  }

  mostrarCasoAbogado() {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    return this.http.get(`${this.URL}/caso-legal/abogadoId/${this.decodedToken.idAbogado}`);
  }

  insertarEvento(body:any) {
    return this.http.post(`${this.URL}/evento`,body);
  }

  buscarEventoId(id:string) {
    return this.http.get(`${this.URL}/evento/${id}`);
  }

  actualizarEvento(id:string,body:any) {
    return this.http.patch(`${this.URL}/evento/${id}`,body);
  }

  eliminarEvento(id:string) {
    return this.http.delete(`${this.URL}/evento/${id}`);
  }
}
