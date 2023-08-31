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

}
