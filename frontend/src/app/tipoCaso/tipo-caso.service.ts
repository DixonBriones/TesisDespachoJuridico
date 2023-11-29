import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoCasoService {
  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarTipoCaso() {
    return this.http.get(`${this.URL}/tipo-caso`);
  }
  insertarTipoCaso(body:any) {
    return this.http.post(`${this.URL}/tipo-caso`,body);
  }

  actualizarTipoCaso(id:string,body:any) {
    return this.http.patch(`${this.URL}/tipo-caso/${id}`,body);
  }

  eliminarTipoCaso(id:string) {
    return this.http.delete(`${this.URL}/tipo-caso/${id}`);
  }
}
