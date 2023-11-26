import { Component } from '@angular/core';
import { RolService } from '../rol.service';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.scss']
})
export class RolListComponent {
  roles: any = [];
  constructor(
    private rolService: RolService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarClientes();
    this.actualizarTabla();
  }

  listarClientes() {
    this.rolService.mostrarRoles().subscribe((res) => {
      this.roles = res;
      //console.log(this.roles);
    });
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarClientes();
    });
  }

  openModalCreate() {
    this.modalService.openModalCreateRol().subscribe((result) => {
      // Lógica a realizar después de cerrar el modal (si es necesario)
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
    this.modalService.openModalEditRol(modalData).subscribe((result) => {
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


  deleteRol(id:string){
    this.rolService.eliminarRol(id).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: `Gutierrez & Asociados`,
          text: 'Eliminado correctamente',
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
        this.listarClientes()
      }
    });
  }
}
