import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public loading: boolean = false;
  loginForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private authService:AuthService) {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }


  login(){
    if (this.loginForm.get('username')?.value === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Gutierrez & Asociados',
        text: `Ingrese usuario.`,
        timer: 3000,
        toast: true,
        position: 'bottom-end',
        timerProgressBar: true,
        showConfirmButton: false
      });
      return;
    }
    if (this.loginForm.get('password')?.value === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Gutierrez & Asociados',
        text: `Ingrese contraseña.`,
        timer: 3000,
        toast: true,
        position: 'bottom-end',
        timerProgressBar: true,
        showConfirmButton: false
      });
      return;
    }

    this.loading = true;
    const savedData = this.loginForm.value;
    this.authService.singIn(savedData).subscribe({
      next: (res: any) => {
        this.loading = false;
        localStorage.setItem('token', res.access_token);
        this.router.navigateByUrl('dashboard/clientes')
        Swal.fire({
          icon: 'success',
          title: `Gutierrez & Asociados`,
          text: 'Bienvenido',
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loading = false;
        const response = err.error;
        Swal.fire({
          icon: 'warning',
          title: `Gutierrez & Asociados`,
          text: response.message,
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
