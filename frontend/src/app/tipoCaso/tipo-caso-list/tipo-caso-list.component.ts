import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { TipoCasoService } from '../tipo-caso.service';

@Component({
  selector: 'app-tipo-caso-list',
  templateUrl: './tipo-caso-list.component.html',
  styleUrls: ['./tipo-caso-list.component.scss']
})
export class TipoCasoListComponent {
  tiposCasos: any = [];
  p: number = 1;
  constructor(
    private tipoCasoService: TipoCasoService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarTipoCasos();
    this.actualizarTabla();
  }

  listarTipoCasos() {
    this.tipoCasoService.mostrarTipoCaso().subscribe((res) => {
      this.tiposCasos = res;
      //console.log(this.roles);
    });
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarTipoCasos();
    });
  }

  deleteTipo(id:string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoCasoService.eliminarTipoCaso(id).subscribe((res) => {
          this.listarTipoCasos()
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }}) 
  }


  openModalCreate() {
    this.modalService.openModalCreateTipoCaso().subscribe((result) => {
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

  openModalEdit(data: any) {
    const modalData = data; 
    this.modalService.openModalEditTipoCaso(modalData).subscribe((result) => {
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
