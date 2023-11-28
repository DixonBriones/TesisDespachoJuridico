import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { TipoCasoService } from '../tipo-caso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-caso-edit',
  templateUrl: './tipo-caso-edit.component.html',
  styleUrls: ['./tipo-caso-edit.component.scss']
})
export class TipoCasoEditComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<TipoCasoEditComponent>,
    private formBuilder: FormBuilder,
    private tipoCasoService: TipoCasoService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
    });
    this.form.patchValue(this.data);
    this.id=data.id;
  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      //console.log('Datos a guardar:', savedData);
      this.tipoCasoService.actualizarTipoCaso(this.id,savedData).subscribe({
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
