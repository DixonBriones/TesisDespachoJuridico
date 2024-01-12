import { Component } from '@angular/core';
import { CalendarEvent,CalendarView ,CalendarEventAction} from 'angular-calendar';
import { ModalService } from 'src/app/utility/modal.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import Swal from 'sweetalert2';
import { EventoService } from '../evento.service';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  parseISO
} from 'date-fns';
import { format} from 'date-fns-tz';
@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  events: CalendarEvent[] = [];

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.buscarEventoId(event.id)
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.deleteEvento(event.id);
      },
    },
  ];

  constructor(
    private eventoService: EventoService,
    private modalService: ModalService,
    private updateTable: UpdateTableService
  ) {}

  ngOnInit(): void {
    this.listarEvento();
    this.actualizarTabla();
  }

  actualizarTabla() {
    this.updateTable.updateTable$.subscribe(() => {
      this.listarEvento();
    });
  }

  listarEvento() {
    this.eventoService.mostrarEventoAbogado().subscribe((res) => {
      this.events = res.map((event) => {
        event.date_start=addHours(parseISO(event.date_start), 5);
        console.log(event.date_start)
        event.date_end=addHours(parseISO(event.date_end), 5);
        return {
          title: event.name,
          start: new Date(event.date_start), // Ajusta según el formato de fecha en tu API
          end: new Date(event.date_end),
          actions: this.actions,
          id: event.id,
          color: {primary:event.color,secondary:event.color_secondary,secondaryText:event.color}
        }
      });
      //console.log(this.events)
    });
  }

  buscarEventoId(id:any) {
    this.eventoService.buscarEventoId(id).subscribe((res) => {
      this.openModalEdit(res);
    });
  }
  
  // Método para cambiar entre vista mensual y semanal
  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


  deleteEvento(id:any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventoService.eliminarEvento(id).subscribe((res) => {
          this.listarEvento();
          this.closeOpenMonthViewDay();
        })
        Swal.fire('¡Acción confirmada!', 'La acción se realizó con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }}) 
  }


  openModalCreate() {
    this.modalService.openModalCreateEvento().subscribe((result) => {
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
    this.modalService.openModalEditEvento(modalData).subscribe((result) => {
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
      }
    });
  }


}
