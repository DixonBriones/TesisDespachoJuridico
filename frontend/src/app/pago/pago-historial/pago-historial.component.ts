import { Component } from '@angular/core';
import { PagoService } from '../pago.service';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pago-historial',
  templateUrl: './pago-historial.component.html',
  styleUrls: ['./pago-historial.component.scss']
})
export class PagoHistorialComponent {
  id: any;
  pagos: any = [];
  p: number = 1;
  saldo:number=0

  constructor(private route: ActivatedRoute,
    private pagoService: PagoService,
    private updateTable: UpdateTableService,
    private modalService: ModalService,
    private location: Location
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.listarCasosPago();
    this.actualizarTabla();
    
  }

  retroceder(): void {
    this.location.back();
  }

  listarCasosPago() {
    this.pagoService.mostrarPagosCasoId(this.id).subscribe((res) => {
      this.pagos = res;
      this.saldoRestante();
    });
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarCasosPago();
    });
  }

  saldoRestante(){
    const honorariosTotales = this.pagos[0].legal_case.service_fee;
    const pagosTotales = this.pagos.reduce((total:any, pago:any) => total + Number(pago.amount), 0);
    this.saldo=honorariosTotales-pagosTotales
  }

  deletePago(id:any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pagoService.eliminarPago(id).subscribe((res) => {
          this.listarCasosPago();
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }}) 
  }

  openModalEdit(data: any) {
    const modalData = data; 
    modalData.maxPayment= this.saldo
    this.modalService.openModalEditPago(modalData).subscribe((result) => {
      // Lógica a realizar después de cerrar el modal (si es necesario)
      if (result) {
        Swal.fire({
          icon: 'success',
          title: `Gutierrez & Asociados`,
          text: 'Datos actualizados correctamente',
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      } else {
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
