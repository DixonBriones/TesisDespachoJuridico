import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolListComponent } from './rol-list/rol-list.component';
import { RolRoutingModule } from './rol-routing.module';
import { RolCreateComponent } from './rol-create/rol-create.component';
import { RolEditComponent } from './rol-edit/rol-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    RolListComponent,
    RolCreateComponent,
    RolEditComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule
  ]
})
export class RolModule { }
