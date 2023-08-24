import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteRoutingModule } from './cliente-routing.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteListComponent,
    ClienteDetailsComponent,
    ClienteEditComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ]
})
export class ClienteModule { }
