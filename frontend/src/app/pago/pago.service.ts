import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private URL = environment.rutaService;
  decodedToken:any;
  token:any;
  data:any=[]

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

}
