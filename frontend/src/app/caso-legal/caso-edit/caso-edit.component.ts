import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';
import {EstadoCaso} from '../../constants/status_case'

@Component({
  selector: 'app-caso-edit',
  templateUrl: './caso-edit.component.html',
  styleUrls: ['./caso-edit.component.scss']
})
export class CasoEditComponent {
  form: FormGroup;
  id: string;
  estadoCaso=Object.values(EstadoCaso);
  tipoCaso: any = [];
  cliente:any=[];

  constructor(
    private dialogRef: MatDialogRef<CasoEditComponent>,
    private formBuilder: FormBuilder,
    private casoLegalService: CasoLegalService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      name_case: [null, [Validators.required, Validators.minLength(3)]],
      process_number: [null, [Validators.minLength(17)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      status_case: [null],
      date_start: [null, [Validators.required]],
      service_fee: [null, [Validators.required]],
      case_type: [null, [Validators.required]],
      client: [null],
      clientIdentificacion: [null, [Validators.required,Validators.minLength(10)]],
      clientName: [null]
    });
    this.data.clientIdentificacion=this.data.client.identification
    this.data.case_type=this.data.case_type.id
    this.data.clientName=this.data.client.name
    this.data.client=this.data.client.id
    this.form.patchValue(this.data);
    this.id=data.id;
  }

  ngOnInit(): void {
    this.listarTiposCasos();
  }

  listarTiposCasos() {
    this.casoLegalService.mostrarTiposCaso().subscribe((res) => {
      this.tipoCaso = res;
    });
  }

  buscarCliente() {
    this.casoLegalService.buscarClienteCedula(this.form.get('clientIdentificacion')?.value).subscribe((res) => {
      this.form.controls['clientName'].setValue(null)
      if( Object.keys(res).length === 0){
        Swal.fire({
          icon: 'error',
          title: `Gutierrez & Asociados`,
          text: "No existe el cliente",
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      }else{
        this.cliente = res;
        this.form.controls['clientName'].setValue(this.cliente[0].name)
        this.form.controls['client'].setValue(this.cliente[0].id)
      }
    });
  }

   save(): void {
    if (this.form.valid) {
      const casoBody={
        name_case:this.form.get('name_case')?.value,
        process_number:this.form.get('process_number')?.value,
        description:this.form.get('description')?.value,
        status_case:this.form.get('status_case')?.value,
        date_start:this.form.get('date_start')?.value,
        service_fee:this.form.get('service_fee')?.value,
        case_type:this.form.get('case_type')?.value,
        client:this.form.get('client')?.value
      }
      //console.log(casoBody)
      this.casoLegalService.actualizarCaso(this.id,casoBody).subscribe({
        next: (res: any) => {
          this.updateTable.notifyTableUpdate();
          this.dialogRef.close(casoBody);
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
    this.updateTable.notifyTableUpdate();
    this.dialogRef.close();
  }

}
