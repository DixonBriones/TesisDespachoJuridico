import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasoLegalService } from '../caso-legal.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-caso-judicatura',
  templateUrl: './caso-judicatura.component.html',
  styleUrls: ['./caso-judicatura.component.scss']
})
export class CasoJudicaturaComponent {
  id: any;
  data: any = {
  };
  constructor(private route: ActivatedRoute,
    private location: Location,
    private casoLegalService: CasoLegalService) {
    this.id = this.route.snapshot.params['id'];
  }



  ngOnInit(): void {
    this.eliminarGuiones()
    this.mostrarCasoId(this.id);
  }

  retroceder(): void {
    this.location.back();
  }

  eliminarGuiones() {
    this.id = this.id.replace(/-/g, '');
  }

  mostrarCasoId(id: any) {
    this.casoLegalService.mostrarCasoJudicatura(id).subscribe((res) => {
      this.data = res
      console.log(this.data)
    });
  }

}
