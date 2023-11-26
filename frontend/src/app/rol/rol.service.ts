import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarRoles() {
    return this.http.get(`${this.URL}/rol`);
  }
  insertarRol(body:any) {
    return this.http.post(`${this.URL}/rol`,body);
  }

  actualizarRol(id:string,body:any) {
    return this.http.patch(`${this.URL}/rol/${id}`,body);
  }

  eliminarRol(id:string) {
    return this.http.delete(`${this.URL}/rol/${id}`);
  }

}
