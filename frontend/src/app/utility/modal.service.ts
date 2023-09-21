import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditComponent } from '../cliente/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { AbogadoCreateComponent } from '../abogado/abogado-create/abogado-create.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModalEditCliente(data: any) {
    const dialogRef = this.dialog.open(ClienteEditComponent, {
      width: '500px',
      data: data
    });
    return dialogRef.afterClosed();
  }

  openModalCreateCliente() {
    const dialogRef = this.dialog.open(ClienteCreateComponent, {
      width: '500px',
    });
    return dialogRef.afterClosed();
  }

  openModalCreateAbogado() {
    const dialogRef = this.dialog.open(AbogadoCreateComponent, {
      width: '500px',
    });
    return dialogRef.afterClosed();
  }
}
