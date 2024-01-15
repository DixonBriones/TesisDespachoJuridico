import { Component, OnInit  } from '@angular/core';
import  { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-reporte-honorario-abogado',
  templateUrl: './reporte-honorario-abogado.component.html',
  styleUrls: ['./reporte-honorario-abogado.component.scss']
})
export class ReporteHonorarioAbogadoComponent {
  myChart: any;
  fechaInicio: string="";
  fechaFin: string="";
  sumaHonorarios:number=0;
  dataReport:any =[];
  constructor( private reporteService: ReporteService,) {
    this.fechaDefecto();
  }

  ngOnInit() {
    this.mostrarReporte();
  }

  mostrarReporte() {
    const paramInicio= new Date(this.fechaInicio);
    const paramFin= new Date(this.fechaFin);
    this.reporteService.mostrarHonorariosAbogados(paramInicio,paramFin).subscribe((res) => {
      this.dataReport = res;
      this.borrarGrafico()
      this.crearGrafico();
    });
  }

  generarColoresAleatorios(cantidad: number){
    const colores = [];
    for (let i = 0; i < cantidad; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      colores.push(color);
    }
    return colores;
  }


  crearGrafico() {
    const nombresAbogados= this.dataReport.map((item:any) => item.lawyer_name);
    const honorarios = this.dataReport.map((item:any) => item.sumaservicefee);
    this.sumaHonorarios= honorarios.reduce((total:number, actual:number) => total + Number(actual), 0)
    const colores = this.generarColoresAleatorios(this.dataReport.length);
    if(honorarios.some((numero:any) => numero !== 0)){
      var data = {
        labels: nombresAbogados,
        datasets: [
          {
            label: 'Honorarios',
            data: honorarios,
            backgroundColor: colores,
       
          }
        ]
      };
  
      this.myChart = new Chart("grafico", {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Honorarios por abogados'
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Abogados'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Honorarios'
              }
            }
          }
        }
      });
    }
    
  }

  borrarGrafico() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  }

  fechaDefecto(){
    const today = new Date();
    const lastYear = today.getFullYear() - 1;

    // Formatear las fechas al formato YYYY-MM-DD
    this.fechaInicio = this.formatDate(new Date(lastYear, today.getMonth(), today.getDate()));
    this.fechaFin = this.formatDate(today);
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    //console.log(`${month}-${day}-${year}`)
    return `${year}-${month}-${day}`;
  }

  async crearPdf(): Promise<void> {
    try {
      const DATA: any = document.getElementById('reporte');
      const doc = new jsPDF('p', 'pt', 'a4');
      const options = {
        background: 'white',
        scale: 2,
        allowTaint: true,
        useCORS: true
      };
  
      const canvas = await html2canvas(DATA, options);
  
      const img = canvas.toDataURL('image/jpeg', 0.9);
  
      const bufferX = 20;
      const bufferY = 20;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      doc.save(`ReporteHonorariosAbogados${new Date().toISOString()}.pdf`);
    } catch (error) {
      console.error('Error al crear el PDF:', error);
    }
  }
}
