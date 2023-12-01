import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.scss']
})
export class EventoCreateComponent {
  form: FormGroup;
  tipoEvento: any = [];
  casos:any=[];
  minFechaFin: string = '';
  constructor(
    private dialogRef: MatDialogRef<EventoCreateComponent>,
    private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.minLength(5)]],
      event_type:[null, [Validators.required]],
      legal_case:[null, [Validators.required]],
      date_start:[null, [Validators.required]],
      date_end:[null, [Validators.required]],
      color:[null, [Validators.required]],
      color_secondary:[null, [Validators.required]],
    });


  }

  ngOnInit(): void {
    this.listarTiposEventos();
    this.listarCasos();
    
  }

  listarTiposEventos() {
    this.eventoService.mostrarTipoEvento().subscribe((res) => {
      this.tipoEvento = res;
      //console.log(this.tipoEvento)
    });
  }

  listarCasos() {
    this.eventoService.mostrarCasoAbogado().subscribe((res) => {
      this.casos = res;
      //console.log(this.tipoEvento)
    });
  }

  validarFechaFin(): void {
    this.minFechaFin = this.form.get('date_start')?.value;
  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      this.eventoService.insertarEvento(savedData).subscribe({
        next: (res: any) => {
          this.updateTable.notifyTableUpdate();
          this.dialogRef.close(savedData);
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
