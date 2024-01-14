import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasoLegalService } from '../caso-legal.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';
@Component({
  selector: 'app-caso-judicatura',
  templateUrl: './caso-judicatura.component.html',
  styleUrls: ['./caso-judicatura.component.scss']
})
export class CasoJudicaturaComponent {
  id: any;
  idGuion: any;
  data: any = [{
    lstIncidenteJudicatura:[ {
      lstLitiganteActor:[{}],
      lstLitiganteDemandado:[{}]
    }
    ]
  }];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private casoLegalService: CasoLegalService) {
    this.id = this.route.snapshot.params['id'];
  }



  ngOnInit(): void {
    this.eliminarGuiones()
    this.mostrarMovimientoJudicatura(this.idGuion);
  }

  retroceder(): void {
    this.location.back();
  }

  eliminarGuiones() {
    this.idGuion = this.id.replace(/-/g, '');
  }

  mostrarMovimientoJudicatura(id: any) {
    this.casoLegalService.mostrarCasoJudicatura(id).subscribe((res) => {
      this.data = res
      //console.log(this.data)
    });
  }

  enviarJSON(body:any) {
    const jsonData={
      idMovimientoJuicioIncidente: body.idMovimientoJuicioIncidente,
      idJuicio: this.idGuion,
      idJudicatura: body.idJudicaturaDestino,
      idIncidenteJudicatura: body.idIncidenteJudicatura,
      incidente: body.incidente
    }
    this.casoLegalService.enviarDatos(jsonData);
    this.router.navigate(['/dashboard/casos/judicatura/'+this.id+'/acciones']);
  }



}
