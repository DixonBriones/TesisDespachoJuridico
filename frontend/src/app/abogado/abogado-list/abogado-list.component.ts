import { Component } from '@angular/core';
import { AbogadoService } from '../abogado.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { ModalService } from 'src/app/utility/modal.service';

@Component({
  selector: 'app-abogado-list',
  templateUrl: './abogado-list.component.html',
  styleUrls: ['./abogado-list.component.scss']
})
export class AbogadoListComponent {
  abogados: any = [];
  query: string = '';

  constructor(
    private abogadoService: AbogadoService,
    private updateTable: UpdateTableService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.listarClientes();
    this.actualizarTabla();
  }

  listarClientes() {
    this.abogadoService.mostrarAbogados(this.query.trim()).subscribe((res) => {
      this.abogados = res;
      console.log(this.abogados);
    });
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarClientes();
    }
  }
  
  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarClientes();
    });
  }

  openModalCreate() {
    this.modalService.openModalCreateAbogado().subscribe((result) => {
      // Lógica a realizar después de cerrar el modal (si es necesario)
      if (result) {
        console.log('Datos guardados:', result);
      } else {
        console.log('Modal cerrado sin guardar');
      }
    });
  }

  openModalEdit(data: any) {
    const modalData = data; 
    this.modalService.openModalEditAbogado(modalData).subscribe((result) => {
      // Lógica a realizar después de cerrar el modal (si es necesario)
      if (result) {
        console.log('Datos guardados:', result);
      } else {
        console.log('Modal cerrado sin guardar');
      }
    });
  }

}
