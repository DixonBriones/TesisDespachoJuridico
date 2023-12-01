import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { EventoService } from '../evento.service';


@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.scss']
})
export class EventoEditComponent {
  form: FormGroup;
  id: string;
  tipoEvento: any = [];
  casos:any=[];
  minFechaFin: string = '';
  constructor(
    private dialogRef: MatDialogRef<EventoEditComponent>,
    private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
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
    this.data.event_type=this.data.event_type.id;
    this.data.legal_case=this.data.legal_case.id;
    this.data.date_start=this.formatoFechaHoraParaFormulario(new Date(this.data.date_start));
    this.data.date_end=this.formatoFechaHoraParaFormulario(new Date(this.data.date_end));
    this.form.patchValue(this.data);
    this.id=data.id;
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

  private formatoFechaHoraParaFormulario(fechaHora: Date): string {
    const formatoFechaHora = `${fechaHora.getFullYear()}-${this.agregarCeroDelante(fechaHora.getMonth() + 1)}-${this.agregarCeroDelante(fechaHora.getDate())}T${this.agregarCeroDelante(fechaHora.getHours())}:${this.agregarCeroDelante(fechaHora.getMinutes())}`;
    return formatoFechaHora;
  }

  private agregarCeroDelante(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      //console.log('Datos a guardar:', savedData);
      this.eventoService.actualizarEvento(this.id,savedData).subscribe({
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
