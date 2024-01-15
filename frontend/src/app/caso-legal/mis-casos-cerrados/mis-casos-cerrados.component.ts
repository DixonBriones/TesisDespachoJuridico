import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mis-casos-cerrados',
  templateUrl: './mis-casos-cerrados.component.html',
  styleUrls: ['./mis-casos-cerrados.component.scss']
})
export class MisCasosCerradosComponent {
  misCasos: any = [];
  p: number = 1;
  query: string = '';
  constructor(
    private router: Router,
    private casoLegalService: CasoLegalService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarMisCasos();
    this.actualizarTabla();
  }

  listarMisCasos() {
    this.casoLegalService.mostrarMisCasosCerrados(this.query.trim()).subscribe((res) => {
      this.misCasos = res;
      //console.log(this.roles);
    });
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarMisCasos();
    }
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarMisCasos();
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
        this.listarMisCasos();
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
          this.listarMisCasos()
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }}) 
  }

  rutaDetalle(id:any){
    this.router.navigate(['/dashboard/casos/detalle/'+id]);
  }
  rutaJudicatura(id:any){
    this.router.navigate(['/dashboard/casos/judicatura/'+id]);
  }

}
