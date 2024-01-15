import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-caso-list',
  templateUrl: './admin-caso-list.component.html',
  styleUrls: ['./admin-caso-list.component.scss']
})
export class AdminCasoListComponent {
  casos: any = [];
  p: number = 1;
  query: string = '';
  constructor(
    private router: Router,
    private casoLegalService: CasoLegalService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarCasos();
    this.actualizarTabla();
  }

  listarCasos() {
    this.casoLegalService.mostrarCasos(this.query.trim()).subscribe((res) => {
      this.casos = res;
      //console.log(this.roles);
    });
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarCasos();
    }
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarCasos();
    });
  }

  openModalCreate() {
    this.modalService.openModalCreateCasoLegal().subscribe((result) => {
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
    this.modalService.openModalEditCasoLegal(modalData).subscribe((result) => {
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
        this.listarCasos()
      }
    });
  }

  rutaDetalle(id:any){
    this.router.navigate(['/dashboard/casos/detalle/'+id]);
  }

  openModalReasignarCaso(data: any) {
    const modalData = data; 
    this.modalService.openModalReasignarCasoLegal(modalData).subscribe((result) => {
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
      this.listarCasos();
      }
    });
  }

  deleteCaso(id:string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.casoLegalService.eliminarCaso(id).subscribe((res) => {
          this.listarCasos()
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }}) 
  }
  rutaJudicatura(id:any){
    this.router.navigate(['/dashboard/casos/judicatura/'+id]);
  }

}
