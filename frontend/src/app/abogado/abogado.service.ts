import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbogadoService {
  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarAbogados(query = '') {
    return this.http.get(`${this.URL}/abogado/search`, { params: { q: query } });
  }
  actualizarAbogado(id:string,body:any) {
   
    return this.http.patch(`${this.URL}/abogado/${id}`,body);
  }

  actualizarUsuario(id:string,body:any) {
   
    return this.http.patch(`${this.URL}/usuario/${id}`,body);
  }
  insertarAbogado(body:any) {
    return this.http.post(`${this.URL}/abogado`,body);
  }

  insertarUsuario(body:any) {
    return this.http.post(`${this.URL}/usuario`,body);
  }

  mostrarRoles() {
    return this.http.get(`${this.URL}/rol`);
  }
  desactivarUsuario(id:string) {
    return this.http.delete(`${this.URL}/usuario/${id}`);
  }
  desactivarAbogado(id:string) {
    return this.http.delete(`${this.URL}/abogado/${id}`);
  }

  eliminarRealAbogado(id:string) {
    return this.http.delete(`${this.URL}/abogado/eliminar/${id}`);
  }

  mostrarAbogadoId(id:string) {
    return this.http.get(`${this.URL}/abogado/searchId/${id}`);
  }

  mostrarCasoAbogadoId(id:string) {
    return this.http.get(`${this.URL}/caso-legal/abogadoId/${id}`);
  }


}
