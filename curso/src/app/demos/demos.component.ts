import { Component } from '@angular/core';
import { NotificationService } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
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
}
