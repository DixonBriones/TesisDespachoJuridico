import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private URL = environment.rutaService;
  constructor(private http: HttpClient) { }

  mostrarEventoNotificaciones(id:any) {
    return this.http.get<any[]>(`${this.URL}/evento/notifications/${id}`);
  }

  actualizarUsuario(id:string,body:any) {
    return this.http.patch(`${this.URL}/usuario/${id}`,body);
  }
}
