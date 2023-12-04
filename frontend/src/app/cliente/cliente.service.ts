import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarClientes(query = '') {
    return this.http.get(`${this.URL}/cliente/search`, { params: { q: query } });
  }
  actualizarCliente(id:string,body:any) {
   
    return this.http.patch(`${this.URL}/cliente/${id}`,body);
  }

  insertarClientes(body:any) {
    return this.http.post(`${this.URL}/cliente`,body);
  }

  desactivarCliente(id:string) {
    return this.http.delete(`${this.URL}/cliente/${id}`);
  }

  mostrarClienteId(id:string) {
    return this.http.get(`${this.URL}/cliente/searchId/${id}`);
  }

  mostrarCasoClienteId(id:string) {
    return this.http.get(`${this.URL}/caso-legal/clienteId/${id}`);
  }
}
