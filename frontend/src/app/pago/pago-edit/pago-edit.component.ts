import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { PagoService } from '../pago.service';

@Component({
  selector: 'app-pago-edit',
  templateUrl: './pago-edit.component.html',
  styleUrls: ['./pago-edit.component.scss']
})
export class PagoEditComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<PagoEditComponent>,
    private formBuilder: FormBuilder,
    private pagoService: PagoService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      amount: [null, [Validators.required,Validators.max(data.maxPayment)]],
      date_payment:[null, [Validators.required]],
      legal_case: [data.idCase, Validators.required]
    });

    this.form.patchValue(this.data);
    this.id=data.id;

  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      this.pagoService.actualizarPago(this.id,savedData).subscribe({
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
