import { Component } from '@angular/core';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';


@Component({
  selector: 'app-caso-list',
  templateUrl: './caso-list.component.html',
  styleUrls: ['./caso-list.component.scss']
})
export class CasoListComponent {
  misCasos: any = [];
  p: number = 1;
  constructor(
    private casoLegalService: CasoLegalService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarMisCasos();
    this.actualizarTabla();
  }

  listarMisCasos() {
    this.casoLegalService.mostrarMisCasos().subscribe((res) => {
      this.misCasos = res;
      //console.log(this.roles);
    });
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarMisCasos();
    });
  }
}
