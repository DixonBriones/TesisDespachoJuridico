import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from './evento-routing.module';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import '@angular/common/locales/global/es';


@NgModule({
  declarations: [
    EventoCreateComponent,
    EventoListComponent,
    EventoEditComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    NgxPaginationModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class EventoModule { }
