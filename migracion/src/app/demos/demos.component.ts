import { Component } from '@angular/core';
import { NotificationService } from '../common-services';
import { ElipsisPipe, CapitalizePipe } from '../../lib/my-core/pipes/cadenas.pipe';
import { default } from '../../lib/independientes/grafico-svg/grafico-svg.component';
import { SizerComponent } from '../../lib/my-core/components/my-sizer.component';
import { CardComponent } from '../common-component/card.component';
import { TypeValidatorDirective } from '../../lib/my-core/directives/mis-validadores.directive';
import { NgFor, NgIf, NgClass, UpperCasePipe, JsonPipe, SlicePipe, DecimalPipe, TitleCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
    selector: 'app-demos',
    templateUrl: './demos.component.html',
    styleUrls: ['./demos.component.css'],
    standalone: true,
    imports: [CalculadoraComponent, FormsModule, NgFor, TypeValidatorDirective, CardComponent, SizerComponent, NgIf, NgClass, default, UpperCasePipe, JsonPipe, SlicePipe, DecimalPipe, TitleCasePipe, CurrencyPipe, DatePipe, ElipsisPipe, CapitalizePipe]
})
export class DemosComponent {
  private nombre: string = 'mundo'
  fecha = '2023-06-08'
  fontSize = 24
  listado = [
    { id: 1, nombre: 'Madrid'},
    { id: 2, nombre: 'barcelona'},
    { id: 3, nombre: 'ZARAGOZA'},
    { id: 4, nombre: 'ciudad Real'},
  ]
  idProvincia = 3;

  resultado?: string
  visible = true
  estetica = { importante: true, error: false, urgente: true, }

  constructor(public vm: NotificationService) { }

  public get Nombre(): string { return this.nombre; }
  public set Nombre(value: string)  {
    if(value === this.nombre) return;
    this.nombre = value;
  }

  public saluda(): void {
    this.resultado = `Hola ${this.Nombre}`
  }
  despide() {
    this.resultado = `Adios ${this.Nombre}`
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`
  }

  cambia() {
    this.visible = !this.visible
    this.estetica.error = !this.estetica.error
    this.estetica.importante = !this.estetica.importante
  }

  calcula(a: number, b: number): number { return a + b; }

  add(provincia: string) {
    const id = this.listado.length + 1;
    this.listado.push({ id, nombre: provincia });
    this.idProvincia = id;
  }

  idiomas = [
    { codigo: 'en-US', region: 'USA' },
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portugal' },
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }


}
