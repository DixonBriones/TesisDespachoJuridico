import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-caso-cerrado',
  templateUrl: './admin-caso-cerrado.component.html',
  styleUrls: ['./admin-caso-cerrado.component.scss']
})
export class AdminCasoCerradoComponent {
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
    this.casoLegalService.mostrarCasosCerrados(this.query.trim()).subscribe((res) => {
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
}
