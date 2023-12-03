import { Component } from '@angular/core';
import { AbogadoService } from '../abogado.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { ModalService } from 'src/app/utility/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abogado-list',
  templateUrl: './abogado-list.component.html',
  styleUrls: ['./abogado-list.component.scss']
})
export class AbogadoListComponent {
  abogados: any = [];
  query: string = '';
  p: number = 1;

  constructor(
    private abogadoService: AbogadoService,
    private updateTable: UpdateTableService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.listarAbogados();
    this.actualizarTabla();
  }

  listarAbogados() {
    this.abogadoService.mostrarAbogados(this.query.trim()).subscribe((res) => {
      this.abogados = res;
      //console.log(this.abogados);
    });
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarAbogados();
    }
  }
  
  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarAbogados();
    });
  }

  openModalCreate() {
    this.modalService.openModalCreateAbogado().subscribe((result) => {
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
    this.modalService.openModalEditAbogado(modalData).subscribe((result) => {
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


  deleteAbogado(id:string,userId:string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El abogado desactivado no tendra acceso al sistema',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.abogadoService.desactivarUsuario(userId).subscribe((res) => {
          this.abogadoService.desactivarAbogado(id).subscribe((res) => {
            this.listarAbogados()
          })
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }
    }) 
  }

  activar(id:string,userId:string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El abogado volvera a tener acceso al sistema',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const abogadoBody={
          status:true,
        }
        this.abogadoService.actualizarAbogado(id,abogadoBody).subscribe((res) => {
          this.abogadoService.actualizarUsuario(userId,abogadoBody).subscribe((res) => {
            this.listarAbogados()
          })
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }
    }) 
  }

}
