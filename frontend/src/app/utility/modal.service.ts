import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditComponent } from '../cliente/cliente-edit/cliente-edit.component';


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
}
