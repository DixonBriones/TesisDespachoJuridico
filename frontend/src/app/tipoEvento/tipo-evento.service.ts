import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {
  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarTipoEvento() {
    return this.http.get(`${this.URL}/tipo-evento`);
  }
  insertarTipoEvento(body:any) {
    return this.http.post(`${this.URL}/tipo-evento`,body);
  }

  actualizarTipoEvento(id:string,body:any) {
    return this.http.patch(`${this.URL}/tipo-evento/${id}`,body);
  }

  eliminarTipoEvento(id:string) {
    return this.http.delete(`${this.URL}/tipo-evento/${id}`);
  }
}
