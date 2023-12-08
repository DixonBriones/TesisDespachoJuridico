import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { DocumentoService } from '../documento.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-documento-create',
  templateUrl: './documento-create.component.html',
  styleUrls: ['./documento-create.component.scss']
})
export class DocumentoCreateComponent {
  form: FormGroup;
  casos:any=[];
  decodedToken:any;
  token:any;
  fileTmp:any=null;

  constructor(
    private dialogRef: MatDialogRef<DocumentoCreateComponent>,
    private formBuilder: FormBuilder,
    private documentoService: DocumentoService,
    private jwtHelper: JwtHelperService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      description: [null, [Validators.required,Validators.minLength(5)]],
      legal_case:[null, [Validators.required]],
      file: [null, [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    this.listarCasos();
    
  }


  listarCasos() {
    this.documentoService.mostrarCasoAbogado(this.decodedToken.idAbogado).subscribe((res) => {
      this.casos = res;
      //console.log(this.tipoEvento)
    });
  }

  save(): void {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('file',this.fileTmp.fileRaw);
      formData.append('description', this.form.get('description')?.value);
      formData.append('legal_case', this.form.get('legal_case')?.value);

      //const savedData = this.form.value;
      this.documentoService.insertarDocumento(formData).subscribe({
        next: (res: any) => {
          this.updateTable.notifyTableUpdate();
          this.dialogRef.close(formData);
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

  getFile($event:any){
    const[file]=$event.target.files
    this.fileTmp= {
      fileRaw:file,
      fileName:file.name
    }
  }
}
