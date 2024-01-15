import { Component,OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit  {
  data: any = {};
  decodedToken:any;
  token:any;
  misDatos:any=[{
    openactivecasecount:null,
    activedocumentcount:null
  }];
  casos:any;
  cliente:any;
  constructor(
    private dashboardService: DashboardService,
    private jwtHelper: JwtHelperService,
  ) {}

  ngOnInit(): void {
    this.mostrarData();
  }

  mostrarData() {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    this.dashboardService.mostrarDashboard().subscribe((res) => {
      this.data = res;
      this.misDatos = this.data.find((item:any) => item.lawyerid === this.decodedToken.idAbogado);
      this.casos=this.data.reduce((acumulador:any, elemento:any) => {
        // Convierte el valor de openactivecasecount a número y suma al acumulador
        return acumulador + Number(elemento.openactivecasecount);
      }, 0);
      this.mostrarDataClientes()
      //console.log(this.casos)
    });
  }

  mostrarDataClientes() {
    this.dashboardService.mostrarDashboardCliente().subscribe((res) => {
      this.cliente = res;
    });
  }

}
