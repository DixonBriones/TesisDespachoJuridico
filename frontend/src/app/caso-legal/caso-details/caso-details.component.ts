import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasoLegalService } from '../caso-legal.service';

@Component({
  selector: 'app-caso-details',
  templateUrl: './caso-details.component.html',
  styleUrls: ['./caso-details.component.scss']
})
export class CasoDetailsComponent {
  id: any;
  datos: any = {};


  constructor(private route: ActivatedRoute,
    private casoLegalService: CasoLegalService) {
    this.id = this.route.snapshot.params['id'];
  }
}
