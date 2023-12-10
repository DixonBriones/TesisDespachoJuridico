import { Component } from '@angular/core';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { ModalService } from 'src/app/utility/modal.service';
import Swal from 'sweetalert2';
import { DocumentoService } from '../documento.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-documento-list',
  templateUrl: './documento-list.component.html',
  styleUrls: ['./documento-list.component.scss']
})
export class DocumentoListComponent {
  documentos: any = [];
  query: string = '';
  p: number = 1;
  decodedToken:any;
  token:any;
  urlStorage:any= environment.rutaStorage

  constructor(
    private documentoService: DocumentoService,
    private updateTable: UpdateTableService,
    private jwtHelper: JwtHelperService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    this.listarDocumentos();
    this.actualizarTabla();
  }

  listarDocumentos() {
    this.documentoService.mostrarDocumentosAbogado(this.decodedToken.idAbogado,this.query.trim()).subscribe((res) => {
      this.documentos = res;
      console.log(this.query);
      console.log(this.decodedToken.idAbogado);
    });
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarDocumentos();
    }
  }
  
  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarDocumentos();
    });
  }

  openModalCreate() {
    this.modalService.openModalCreateDocument().subscribe((result) => {
      if (result) {
        // console.log('Datos guardados:', result);
         Swal.fire({
           icon: 'success',
           title: `Gutierrez & Asociados`,
           text: 'Datos guardados',
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

  openModalEdit(data: any) {
    const modalData = data; 
    this.modalService.openModalEditDocument(modalData).subscribe((result) => {
      // Lógica a realizar después de cerrar el modal (si es necesario)
      if (result) {
        Swal.fire({
          icon: 'success',
          title: `Gutierrez & Asociados`,
          text: 'Datos actualizados correctamente',
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      } else {
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
        this.listarDocumentos()
      }
    });
  }

  deleteDocumento(id:any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.documentoService.eliminarDocumento(id).subscribe((res) => {
          this.listarDocumentos();
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }}) 
  }



}
