import { Component } from '@angular/core';
import { PagoService } from '../pago.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { ModalService } from 'src/app/utility/modal.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pago-list-finalizado',
  templateUrl: './pago-list-finalizado.component.html',
  styleUrls: ['./pago-list-finalizado.component.scss']
})
export class PagoListFinalizadoComponent {
  misCasos: any = [];
  query: string = '';
  p: number = 1;
  decodedToken:any;
  token:any;

  constructor(
    private router: Router,
    private pagoService: PagoService,
    private updateTable: UpdateTableService,
    private jwtHelper: JwtHelperService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    this.listarCasosPago();
    this.actualizarTabla();
  }

  listarCasosPago() {
    this.pagoService.mostrarPagosFinalizadoMisCasos(this.decodedToken.idAbogado,this.query.trim()).subscribe((res) => {
      this.misCasos = res;
      
    });
  }

  calcularTotalRestante(honorarios:any,pagos:any){
    const totalPagos= pagos.reduce((total:any, pago:any) => total + Number(pago.amount), 0);
    return honorarios-totalPagos
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarCasosPago();
    }
  }
  
  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarCasosPago();
    });
  }

  historial(id:any){
    this.router.navigate(['/dashboard/pago/historial/'+id]);
  }


}
