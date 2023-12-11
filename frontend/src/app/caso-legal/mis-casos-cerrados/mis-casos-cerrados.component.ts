import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';

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


}
