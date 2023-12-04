import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.scss']
})
export class ClienteDetailsComponent {
  id: any;
  datos: any = {
    user : {
      role : {}
    }
  };
  casos:any=[];

  constructor(private route: ActivatedRoute,
    private clienteService: ClienteService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mostrarAbogadoId(this.id);
    this.mostrarCasosClienteId(this.id);
  }

  mostrarAbogadoId(id: any) {
    this.clienteService.mostrarClienteId(id).subscribe((res) => {
      this.datos = res
    });
  }

  mostrarCasosClienteId(id: any) {
    this.clienteService.mostrarCasoClienteId(id).subscribe((res) => {
      this.casos = res
      //console.log(this.casos)
    });
  }

}
