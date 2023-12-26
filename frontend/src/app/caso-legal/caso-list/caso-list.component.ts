import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-caso-list',
  templateUrl: './caso-list.component.html',
  styleUrls: ['./caso-list.component.scss']
})
export class CasoListComponent {
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
    this.casoLegalService.mostrarMisCasos(this.query.trim()).subscribe((res) => {
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
        this.listarMisCasos()
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
        this.listarMisCasos()
      }
    });
  }

  rutaDetalle(id:any){
    this.router.navigate(['/dashboard/casos/detalle/'+id]);
  }


}
