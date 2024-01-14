import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasoLegalService } from '../caso-legal.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-caso-judicatura-actuaciones',
  templateUrl: './caso-judicatura-actuaciones.component.html',
  styleUrls: ['./caso-judicatura-actuaciones.component.scss']
})
export class CasoJudicaturaActuacionesComponent {
  dataBusqueda: any;
  dataActuaciones:any=[];
  p: number = 1;
  id: any;
  cargando: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private casoLegalService: CasoLegalService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.busquedaActuaciones()
  }

  busquedaActuaciones(){
    this.cargando = true;
    this.casoLegalService.datosCompartidos.subscribe((res) => {
      this.dataBusqueda = res;
      //console.log(this.dataBusqueda)
    });
    if(!this.dataBusqueda){
      this.router.navigate(['/dashboard/casos/judicatura/'+this.id]);
    }else{
      this.casoLegalService.mostrarActuaciones(this.dataBusqueda).subscribe((res) => {
        this.dataActuaciones = res;
        this.cargando = false;
        //console.log(this.dataActuaciones)
      });
    }
  }

  retroceder(): void {
    this.location.back();
  }

}
