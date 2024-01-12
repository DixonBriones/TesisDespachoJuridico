import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbogadoService } from '../abogado.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abogado-edit',
  templateUrl: './abogado-edit.component.html',
  styleUrls: ['./abogado-edit.component.scss']
})
export class AbogadoEditComponent {
  form: FormGroup;
  id: string;
  idUser:string;
  roles: any = [];

  constructor(
    private dialogRef: MatDialogRef<AbogadoEditComponent>,
    private formBuilder: FormBuilder,
    private abogadoService: AbogadoService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      identification: [null, [Validators.required, Validators.minLength(10)]],
      registration_number: [null, [Validators.required]],
      name: [null, Validators.required],
      address: [null],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      email: [null,[Validators.required, Validators.email]],
      role: [null,Validators.required],
      username: [null,[Validators.required, Validators.minLength(5)]],
      password: [null,[Validators.minLength(8)]],
    });
    
    const { username } = this.data.user;
    this.data.username=username;
    this.data.role=this.data.user.role.id;
    this.form.patchValue(this.data);
    this.id=data.id;
    this.idUser=data.user.id;
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
        registration_number:this.form.get('registration_number')?.value,
        name:this.form.get('name')?.value,
        address:this.form.get('address')?.value,
        phone:this.form.get('phone')?.value,
        email:this.form.get('email')?.value,
      }

      this.abogadoService.actualizarAbogado(this.id,abogadoBody).subscribe({
        next: (res: any) => {
          const usuarioBody={
            username:this.form.get('username')?.value,
            password:this.form.get('password')?.value,
            role:this.form.get('role')?.value,
          }
          
          this.abogadoService.actualizarUsuario(this.idUser,usuarioBody).subscribe({ 
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
