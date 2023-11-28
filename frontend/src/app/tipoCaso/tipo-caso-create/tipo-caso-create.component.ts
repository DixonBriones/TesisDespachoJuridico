import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { TipoCasoService } from '../tipo-caso.service';


@Component({
  selector: 'app-tipo-caso-create',
  templateUrl: './tipo-caso-create.component.html',
  styleUrls: ['./tipo-caso-create.component.scss']
})
export class TipoCasoCreateComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<TipoCasoCreateComponent>,
    private formBuilder: FormBuilder,
    private tipoCasoService: TipoCasoService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]]
    });

  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      this.tipoCasoService.insertarTipoCaso(savedData).subscribe({
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
