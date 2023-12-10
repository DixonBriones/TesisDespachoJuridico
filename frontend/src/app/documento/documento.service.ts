import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private URL = environment.rutaService;

  constructor(private http: HttpClient) { }

  mostrarDocumentosAbogado(id:any,query = '') {
    console.log(this.http.get(`${this.URL}/documento/abogado/${id}`, { params: { q: query }}))
    return this.http.get(`${this.URL}/documento/abogado/${id}`, { params: { q: query }});
  }
  insertarDocumento(body:FormData) {
    return this.http.post(`${this.URL}/documento/upload/${body.get('legal_case')}`,body);
  }

  mostrarCasoAbogado(id:any) {
    return this.http.get(`${this.URL}/caso-legal/abogadoId/${id}`);
  }

  actualizarDocumento(id:string,body:any) {
    return this.http.patch(`${this.URL}/documento/${body.get('legal_case')}/${id}`,body);
  }

  eliminarDocumento(id:string) {
    return this.http.delete(`${this.URL}/documento/${id}`);
  }
}
