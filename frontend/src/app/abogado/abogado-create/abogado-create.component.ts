import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbogadoService } from '../abogado.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abogado-create',
  templateUrl: './abogado-create.component.html',
  styleUrls: ['./abogado-create.component.scss']
})
export class AbogadoCreateComponent {
  form: FormGroup;
  roles: any = [];

  constructor(
    private dialogRef: MatDialogRef<AbogadoCreateComponent>,
    private formBuilder: FormBuilder,
    private abogadoService: AbogadoService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      identification: [null, [Validators.required, Validators.minLength(10)]],
      name: [null, Validators.required],
      address: [null],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      email: [null,[Validators.required, Validators.email]],
      rol: [null,Validators.required],
      username: [null,[Validators.required, Validators.minLength(5)]],
      password: [null,[Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.listarRoles();
  }

  listarRoles() {
    this.abogadoService.mostrarRoles().subscribe((res) => {
      this.roles = res;
      //console.log(this.roles);
    });
  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      //console.log('Datos a guardar:', savedData);
      const abogadoBody={
        identification:this.form.get('identification')?.value,
        name:this.form.get('name')?.value,
        address:this.form.get('address')?.value,
        phone:this.form.get('phone')?.value,
        email:this.form.get('email')?.value,
      }
      this.abogadoService.insertarAbogado(abogadoBody).subscribe({ 
        
        next: (res: any) => {
          const abogadoId=res.id;
          const usuarioBody={
            username:this.form.get('username')?.value,
            password:this.form.get('password')?.value,
            role:this.form.get('rol')?.value,
            lawyer: res.id
          }
          this.abogadoService.insertarUsuario(usuarioBody).subscribe({
            next: (res: any) => {
              this.updateTable.notifyTableUpdate();
              this.dialogRef.close(savedData);
            },
            error: (err: any) => { 
              this.abogadoService.eliminarRealAbogado(abogadoId).subscribe(res=>{
              })
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
          })
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
