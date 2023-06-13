import { Component } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menu = [
    { texto: 'demos', icono: '', componente: DemosComponent},
    { texto: 'inicio', icono: '', componente: HomeComponent},
    { texto: 'gráfico', icono: '', componente: GraficoSvgComponent},
  ]
  actual: any = this.menu[0].componente

  selecciona(indice: number) {
    this.actual = this.menu[indice].componente
  }
}
