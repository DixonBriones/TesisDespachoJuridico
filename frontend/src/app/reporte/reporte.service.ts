import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private URL = environment.rutaService;


  constructor(private http: HttpClient) { }

  mostrarCasosAbogados(fchInicio:Date,fchFin:Date) {
    const params = new HttpParams()
    .set('fechaInicio', this.formatDate(fchInicio))
    .set('fechaFin', this.formatDate(fchFin));
    return this.http.get(`${this.URL}/abogado/reportAbogadoCasos`, {params});
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  }
}
