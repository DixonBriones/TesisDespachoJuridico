import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.component.html',
  styleUrls: ['./cambio-password.component.scss']
})
export class CambioPasswordComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<CambioPasswordComponent>,
    private formBuilder: FormBuilder,
    private pagesService: PagesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      password: [null,[Validators.required, Validators.minLength(8)]],
      passwordconfirm: [null,[Validators.required, Validators.minLength(8)]],
    });
    this.id=data;
  }

  save(){
    if (this.form.valid) { 
      if (this.form.get('password')?.value === this.form.get('passwordconfirm')?.value) {
        const usuarioBody={
          password:this.form.get('password')?.value,
        }
        this.pagesService.actualizarUsuario(this.id,usuarioBody).subscribe({ 
          next: (res: any) => {
            this.dialogRef.close(usuarioBody);
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
      } else {
        Swal.fire({
          icon: 'error',
          title: `Gutierrez & Asociados`,
          text: "Las contraseñas no coinciden",
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    }
    
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
