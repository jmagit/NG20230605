import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService, NotificationType } from '../common-services';
import { AUTH_REQUIRED } from '../security';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = environment.apiURL;
  constructor(protected http: HttpClient, entidad: string, protected option = {}) {
    this.baseUrl += entidad;
  }
  query(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, this.option);
  }
  get(id: K): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id, this.option);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, this.option);
  }
  change(id: K, item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
  }
  remove(id: K): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
  }
}

@Injectable({ providedIn: 'root' })
export class PersonasDaoService extends RESTDAOService<any, number> {
  constructor(http: HttpClient) {
    super(http, 'personas', {context: new HttpContext().set(AUTH_REQUIRED, true),})
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  elemento: any = {}
  modo: 'add' | 'edit' = 'add'

  constructor(private dao: PersonasDaoService, private notify: NotificationService) { }

  add() {
    this.elemento = {}
    this.modo = 'add'
  }
  edit() {
    // this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pgrillo@example.com', nif: '12345678z', edad: 99 }
    this.dao.get(this.elemento.id).subscribe({
      next: data => {
        this.elemento = data
        this.modo = 'edit'
      },
      error: err => this.notify.add(JSON.stringify(err))
    })
  }

  send() {
    switch (this.modo) {
      case 'add':
        alert(`POST: ${JSON.stringify(this.elemento)}`)
        this.dao.add(this.elemento).subscribe({
          next: () => this.notify.add(`POST: ${JSON.stringify(this.elemento)}`, NotificationType.info),
          error: err => this.notify.add(JSON.stringify(err))
        })
        break;
      case 'edit':
        alert(`PUT: ${JSON.stringify(this.elemento)}`)
        this.dao.change(this.elemento.id, this.elemento).subscribe({
          next: () => this.notify.add(`POST: ${JSON.stringify(this.elemento)}`, NotificationType.info),
          error: err => this.notify.add(JSON.stringify(err))
        })
        break;
    }
  }
  cancel() {

  }
}
