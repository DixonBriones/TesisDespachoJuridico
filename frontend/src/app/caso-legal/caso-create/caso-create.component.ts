import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { CasoLegalService } from '../caso-legal.service';
import {EstadoCaso} from '../../constants/status_case'


@Component({
  selector: 'app-caso-create',
  templateUrl: './caso-create.component.html',
  styleUrls: ['./caso-create.component.scss']
})
export class CasoCreateComponent {
  form: FormGroup;
  estadoCaso=Object.values(EstadoCaso);
  tipoCaso: any = [];
  cliente:any=[];
  constructor(
    private dialogRef: MatDialogRef<CasoCreateComponent>,
    private formBuilder: FormBuilder,
    private casoLegalService: CasoLegalService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      name_case: [null, [Validators.required, Validators.minLength(3)]],
      process_number: [null, [Validators.minLength(15)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      status_case: [null],
      date_start: [null, [Validators.required]],
      service_fee: [null, [Validators.required]],
      case_type: [null, [Validators.required]],
      client: [null],
      clientIdentificacion: [null, [Validators.required,Validators.minLength(10)]],
      clientName: [null]
    });

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
      const CasoBody={
        name_case:this.form.get('name_case')?.value,
        process_number:this.form.get('process_number')?.value,
        description:this.form.get('description')?.value,
        status_case:EstadoCaso.RevisionInicial,
        date_start:this.form.get('date_start')?.value,
        service_fee:this.form.get('service_fee')?.value,
        case_type:this.form.get('case_type')?.value,
        client:this.form.get('client')?.value
      }
      this.casoLegalService.insertarMiCaso(CasoBody).subscribe({
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
