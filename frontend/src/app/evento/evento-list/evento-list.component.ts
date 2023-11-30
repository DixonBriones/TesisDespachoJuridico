import { Component } from '@angular/core';
import { CalendarEvent,CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent {
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    // Aquí puedes agregar eventos al calendario
    // Por ejemplo:
    // { title: 'Evento 1', start: new Date(), end: new Date() },
    // { title: 'Evento 2', start: new Date(), end: new Date() },
  ];



  // Método para cambiar entre vista mensual y semanal
  setView(view: CalendarView) {
    this.view = view;
  }

}
