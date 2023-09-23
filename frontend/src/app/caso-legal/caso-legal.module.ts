import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasoCreateComponent } from './caso-create/caso-create.component';
import { CasoListComponent } from './caso-list/caso-list.component';
import { CasoUpdateComponent } from './caso-update/caso-update.component';
import { CasoDetailsComponent } from './caso-details/caso-details.component';
import { CasoLegalRoutingModule } from './caso-legal-routing.module';



@NgModule({
  declarations: [
    CasoCreateComponent,
    CasoListComponent,
    CasoUpdateComponent,
    CasoDetailsComponent
  ],
  imports: [
    CommonModule,
    CasoLegalRoutingModule
  ]
})
export class CasoLegalModule { }
