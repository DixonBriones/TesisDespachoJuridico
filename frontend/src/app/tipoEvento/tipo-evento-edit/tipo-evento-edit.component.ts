import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { TipoEventoService } from '../tipo-evento.service';


@Component({
  selector: 'app-tipo-evento-edit',
  templateUrl: './tipo-evento-edit.component.html',
  styleUrls: ['./tipo-evento-edit.component.scss']
})
export class TipoEventoEditComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<TipoEventoEditComponent>,
    private formBuilder: FormBuilder,
    private tipoEventoService: TipoEventoService,
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
      this.tipoEventoService.actualizarTipoEvento(this.id,savedData).subscribe({
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
