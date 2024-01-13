import { ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { navbardData } from './sidenav-data';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PagesService } from './pages.service';
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/utility/modal.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  decodedToken:any;
  token:any;
  menuItems = navbardData;
  notifications:any=[];
  
  submenuOpen: { [label: string]: boolean } = {};


  constructor(private observer: BreakpointObserver,private cd:ChangeDetectorRef,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private modalService: ModalService,
    private pagesService:PagesService) 
  {

  }


  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    this.notificaciones();
  }

  notificaciones() {
    this.pagesService.mostrarEventoNotificaciones(this.decodedToken.idAbogado).subscribe((res) => {
      this.notifications = res;
      //console.log(this.notifications);
    });
  }

  rolVerificador(rutaRol:any){
    const rolUser=this.decodedToken.rolUser
    if(rutaRol==rolUser || rolUser==="ADMIN"){
      return true
    }
    return false
  }

  getRemainingTime(timeStamp: string,date_end: string): string{
    const expirationTime = new Date(timeStamp).getTime(); // Convierte la cadena de tiempo a milisegundos
    const currentTime = new Date().getTime();
    const date_end_Time = new Date(date_end).getTime();
    const remainingTimeMillis = expirationTime - currentTime;
    const remainingTimeEnd = date_end_Time - currentTime;
    
    if (remainingTimeMillis <=0 && remainingTimeEnd >=0) {
      return `En progreso`; // O cualquier otro valor predeterminado
    }
    if (remainingTimeMillis <=0 && remainingTimeEnd <=0){
      return `Finalizado`;
    }
    const days = Math.floor(remainingTimeMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTimeMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTimeMillis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTimeMillis % (1000 * 60)) / 1000);
  
    return `Días: ${days}, Horas: ${hours}, Minutos: ${minutes}`;
  }

  toggleSubMenu(menuItem: any) {
    const label = menuItem.label;
    this.submenuOpen[label] = !this.submenuOpen[label];
  }
  
  ngAfterViewInit() {
    this.sidenav.open()
    this.observer.observe(['(max-width:800px)']).subscribe((res: any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cd.detectChanges();
  }

  cambioPassword(){
    this.modalService.openModalChangePassword(this.decodedToken.id).subscribe((result) => {
      if (result) {
        // console.log('Datos guardados:', result);
         Swal.fire({
           icon: 'success',
           title: `Gutierrez & Asociados`,
           text: 'Contraseña guardada',
           timer: 3500,
           toast: true,
           position: 'bottom-end',
           timerProgressBar: true,
           showConfirmButton: false
         });
       } else {
        // console.log('Modal cerrado sin guardar');
        Swal.fire({
         icon: 'warning',
         title: `Gutierrez & Asociados`,
         text: 'Modal cerrado sin guardar',
         timer: 3500,
         toast: true,
         position: 'bottom-end',
         timerProgressBar: true,
         showConfirmButton: false
       });
      }
    });
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
