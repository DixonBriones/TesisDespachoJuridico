import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasoLegalService } from '../caso-legal.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-caso-details',
  templateUrl: './caso-details.component.html',
  styleUrls: ['./caso-details.component.scss']
})
export class CasoDetailsComponent {
  id: any;
  urlStorage:any= environment.rutaStorage
  data: any = {
    lawyer : {},
    client : {},
    case_type : {},
    document : [],
    payment : [],
  };


  constructor(private route: ActivatedRoute,
    private location: Location,
    private casoLegalService: CasoLegalService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mostrarCasoId(this.id);
  }

  retroceder(): void {
    this.location.back();
  }

  mostrarCasoId(id: any) {
    this.casoLegalService.mostrarCasoCompleto(id).subscribe((res) => {
      this.data = res
    });
  }
}
