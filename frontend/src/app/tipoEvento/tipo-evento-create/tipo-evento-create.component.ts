import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { TipoEventoService } from '../tipo-evento.service';

@Component({
  selector: 'app-tipo-evento-create',
  templateUrl: './tipo-evento-create.component.html',
  styleUrls: ['./tipo-evento-create.component.scss']
})
export class TipoEventoCreateComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<TipoEventoCreateComponent>,
    private formBuilder: FormBuilder,
    private tipoEventoService: TipoEventoService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]]
    });

  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      this.tipoEventoService.insertarTipoEvento(savedData).subscribe({
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
