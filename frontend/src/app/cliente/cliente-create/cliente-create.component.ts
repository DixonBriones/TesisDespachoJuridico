import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ClienteCreateComponent>,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      identification: [null, [Validators.required, Validators.minLength(10)]],
      name: [null, Validators.required],
      address: [null],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      email: [null,Validators.email]
    });
  }


  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      this.clienteService.insertarClientes(savedData).subscribe({
        next: (res: any) => {
          this.updateTable.notifyTableUpdate();
          this.dialogRef.close(savedData);
        },
        error: (err: any) => { 
          Swal.fire({
            icon: 'error',
            title: `Gutierrez & Asociados`,
            text: err.error.message,
            timer: 3500,
            toast: true,
            position: 'bottom-end',
            timerProgressBar: true,
            showConfirmButton: false
          });
        }
      }); 
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
