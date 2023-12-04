import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<ClienteEditComponent>,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      identification: [null, [Validators.required, Validators.minLength(10)]],
      name: [null, Validators.required],
      address: [null],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      email: [null,Validators.email]
    });

    this.form.patchValue(this.data);
    this.id=data.id;
  }

  


  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      this.clienteService.actualizarCliente(this.id,savedData).subscribe({
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