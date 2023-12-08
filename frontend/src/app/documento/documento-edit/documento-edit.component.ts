import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { DocumentoService } from '../documento.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-documento-edit',
  templateUrl: './documento-edit.component.html',
  styleUrls: ['./documento-edit.component.scss']
})
export class DocumentoEditComponent {
  form: FormGroup;
  casos:any=[];
  id: string;
  decodedToken:any;
  token:any;
  fileTmp:any=null;

  constructor(
    private dialogRef: MatDialogRef<DocumentoEditComponent>,
    private formBuilder: FormBuilder,
    private documentoService: DocumentoService,
    private jwtHelper: JwtHelperService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      description: [null, [Validators.required,Validators.minLength(5)]],
      legal_case:[null, [Validators.required]],
      file: [null]
    });
    this.data.legal_case=this.data.legal_case.id;
    this.form.patchValue(this.data);
    this.id=data.id;

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
      if(this.fileTmp){
        formData.append('file',this.fileTmp.fileRaw); 
        formData.append('description', this.form.get('description')?.value);
        formData.append('legal_case', this.form.get('legal_case')?.value);
      }
      if(!this.fileTmp){
        formData.append('description', this.form.get('description')?.value);
        formData.append('legal_case', this.form.get('legal_case')?.value);
      }

      //const savedData = this.form.value;
      this.documentoService.actualizarDocumento(this.id,formData).subscribe({
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
