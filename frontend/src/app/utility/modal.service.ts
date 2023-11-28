import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditComponent } from '../cliente/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { AbogadoCreateComponent } from '../abogado/abogado-create/abogado-create.component';
import { AbogadoEditComponent } from '../abogado/abogado-edit/abogado-edit.component';
import { RolCreateComponent } from '../rol/rol-create/rol-create.component';
import { RolEditComponent } from '../rol/rol-edit/rol-edit.component';
import { TipoCasoCreateComponent } from '../tipoCaso/tipo-caso-create/tipo-caso-create.component';
import { TipoCasoEditComponent } from '../tipoCaso/tipo-caso-edit/tipo-caso-edit.component';
import { TipoEventoCreateComponent } from '../tipoEvento/tipo-evento-create/tipo-evento-create.component';
import { TipoEventoEditComponent } from '../tipoEvento/tipo-evento-edit/tipo-evento-edit.component';


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

  openModalEditAbogado(data: any) {
    const dialogRef = this.dialog.open(AbogadoEditComponent, {
      width: '500px',
      data: data
    });
    return dialogRef.afterClosed();
  }

  openModalCreateRol() {
    const dialogRef = this.dialog.open(RolCreateComponent, {
      width: '500px',
    });
    return dialogRef.afterClosed();
  }

  openModalEditRol(data: any) {
    const dialogRef = this.dialog.open(RolEditComponent, {
      width: '500px',
      data: data
    });
    return dialogRef.afterClosed();
  }

  openModalCreateTipoCaso() {
    const dialogRef = this.dialog.open(TipoCasoCreateComponent, {
      width: '500px',
    });
    return dialogRef.afterClosed();
  }

  openModalEditTipoCaso(data: any) {
    const dialogRef = this.dialog.open(TipoCasoEditComponent, {
      width: '500px',
      data: data
    });
    return dialogRef.afterClosed();
  }
  
  openModalCreateTipoEvento() {
    const dialogRef = this.dialog.open(TipoEventoCreateComponent, {
      width: '500px',
    });
    return dialogRef.afterClosed();
  }

  openModalEditTipoEvento(data: any) {
    const dialogRef = this.dialog.open(TipoEventoEditComponent, {
      width: '500px',
      data: data
    });
    return dialogRef.afterClosed();
  }

}
