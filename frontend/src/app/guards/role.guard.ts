import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  decodedToken: any;
  token: any;
  constructor(private router: Router,  private jwtHelper: JwtHelperService,) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const requiredRole = next.data['role'];
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    const rolUser=this.decodedToken.rolUser
    // Verifica si el usuario tiene el rol necesario
    if (requiredRole.includes(rolUser)) {
      return true;
    } else {
      // Si no tiene el rol, redirige a una página de acceso no autorizado o a donde desees
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
