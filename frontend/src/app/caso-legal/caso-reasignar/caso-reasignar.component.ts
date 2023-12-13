import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';

@Component({
  selector: 'app-caso-reasignar',
  templateUrl: './caso-reasignar.component.html',
  styleUrls: ['./caso-reasignar.component.scss']
})
export class CasoReasignarComponent {
  form: FormGroup;
  id: string;
  abogado:any=[];
  constructor(
    private dialogRef: MatDialogRef<CasoReasignarComponent>,
    private formBuilder: FormBuilder,
    private casoLegalService: CasoLegalService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      identification: [null, [Validators.required,Validators.minLength(10)]],
      lawyer: [null, Validators.required],
    });
    this.id=data;
  }

  buscarCliente() {
    this.casoLegalService.buscarAbogadoCedula(this.form.get('identification')?.value).subscribe((res) => {
      this.form.controls['lawyer'].setValue(null)
      if( Object.keys(res|| {}).length === 0){
        Swal.fire({
          icon: 'error',
          title: `Gutierrez & Asociados`,
          text: "No existe el abogado",
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      }else{
        console.log(this.abogado)
        this.abogado = res;
        this.form.controls['lawyer'].setValue(this.abogado.name)
      }
    });
  }

  save(): void {
    if (this.form.valid) {
      const CasoBody={
        lawyer : this.abogado.id
      }
      this.casoLegalService.actualizarCaso(this.id,CasoBody).subscribe({
        next: (res: any) => {
          this.updateTable.notifyTableUpdate();
          this.dialogRef.close(CasoBody);
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
