import { Component } from '@angular/core';
import { PagoService } from '../pago.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { ModalService } from 'src/app/utility/modal.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import { id } from 'date-fns/locale';
@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.scss']
})
export class PagoListComponent {
  misCasos: any = [];
  query: string = '';
  p: number = 1;
  decodedToken:any;
  token:any;

  constructor(
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
    this.pagoService.mostrarPagosPendientesMisCasos(this.decodedToken.idAbogado,this.query.trim()).subscribe((res) => {
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

  openModalCreate(maxPayment: any,idCase:any) {
    const modalData = {
      maxPayment:maxPayment,
      idCase:idCase
    }; 
    this.modalService.openModalCreatePago(modalData).subscribe((result) => {
      if (result) {
        // console.log('Datos guardados:', result);
         Swal.fire({
           icon: 'success',
           title: `Gutierrez & Asociados`,
           text: 'Datos guardados',
           timer: 3500,
           toast: true,
           position: 'bottom-end',
           timerProgressBar: true,
           showConfirmButton: false
         });
       } else {
        // console.log('Modal cerrado sin guardar');
        Swal.fire({
         icon: 'warning',
         title: `Gutierrez & Asociados`,
         text: 'Modal cerrado sin guardar',
         timer: 3500,
         toast: true,
         position: 'bottom-end',
         timerProgressBar: true,
         showConfirmButton: false
       });
      }
    });
  }


}
