import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbogadoService } from '../abogado.service';

@Component({
  selector: 'app-abogado-details',
  templateUrl: './abogado-details.component.html',
  styleUrls: ['./abogado-details.component.scss']
})
export class AbogadoDetailsComponent {
  id: any;
  datos: any = {
    user : {
      role : {}
    }
  };
  casos:any=[];

  constructor(private route: ActivatedRoute,
    private abogadoService: AbogadoService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mostrarAbogadoId(this.id);
    this.mostrarCasosAbogadoId(this.id);
  }

  mostrarAbogadoId(id: any) {
    this.abogadoService.mostrarAbogadoId(id).subscribe((res) => {
      this.datos = res
    });
  }

  mostrarCasosAbogadoId(id: any) {
    this.abogadoService.mostrarCasoAbogadoId(id).subscribe((res) => {
      this.casos = res
      //console.log(this.casos)
    });
  }
}
