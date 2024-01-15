import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private URL = environment.rutaService;
  constructor(private http: HttpClient) { }

  mostrarDashboard() {
    return this.http.get(`${this.URL}/abogado/dashboard`);
  }

  mostrarDashboardCliente() {
    return this.http.get(`${this.URL}/cliente/dashboard`);
  }

}
