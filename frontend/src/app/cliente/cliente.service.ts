import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarClientes() {
    return this.http.get(`${this.URL}/cliente`);
  }
  actualizarCliente(id:string,body:any) {
   
    return this.http.patch(`${this.URL}/cliente/${id}`,body);
  }

  insertarClientes(body:any) {
    return this.http.post(`${this.URL}/cliente`,body);
  }

}
