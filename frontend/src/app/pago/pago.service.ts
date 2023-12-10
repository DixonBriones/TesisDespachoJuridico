import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private URL = environment.rutaService;


  constructor(private http: HttpClient) { }

  mostrarPagosPendientesMisCasos(id:string,query = '') {
    return this.http.get(`${this.URL}/caso-legal/paymentPendient/${id}`, { params: { q: query }});
  }

  insertarPago(body:any) {
    return this.http.post(`${this.URL}/pago`,body);
  }

  mostrarPagosCasoId(id:string) {
    return this.http.get(`${this.URL}/pago/caso/${id}`);
  }

  eliminarPago(id:string) {
    return this.http.delete(`${this.URL}/pago/${id}`);
  }

  actualizarPago(id:string,body:any) {
    return this.http.patch(`${this.URL}/pago/${id}`,body);
  }

}
