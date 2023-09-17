import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
})
export class ClienteListComponent {
  clientes: any = [];
  query: string = '';

  constructor(
    private clienteService: ClienteService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarClientes();
    this.actualizarTabla();
  }

  listarClientes() {
    this.clienteService.mostrarClientes(this.query.trim()).subscribe((res) => {
      this.clientes = res;
      console.log(this.clientes);
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
    this.modalService.openModalCreateCliente().subscribe((result) => {
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
    this.modalService.openModalEditCliente(modalData).subscribe((result) => {
      // Lógica a realizar después de cerrar el modal (si es necesario)
      if (result) {
        console.log('Datos guardados:', result);
      } else {
        console.log('Modal cerrado sin guardar');
      }
    });
  }
}
