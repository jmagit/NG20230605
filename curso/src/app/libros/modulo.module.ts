import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResolveFn, Router, RouterModule } from '@angular/router';
import { MyCoreModule } from '@my/core';
import { CommonServicesModule } from '../common-services';
import { LibrosComponent, LIBROS_COMPONENTES } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
import { CommonComponentModule } from '../common-component';
import { map, catchError, EMPTY } from 'rxjs';
import { LibrosDAOService } from './servicios.service';

export const DatosResolveFn: ResolveFn<any> =  (route, state) => {
  let router = inject(Router)
  return inject(LibrosDAOService).get(route.paramMap.get('id')!)
    .pipe(
      map(data => {
          if (data) {
             return data;
            } else {
              throw 'Not found'
          }
        }),
      catchError(err => { router.navigate(['/404.html']); return EMPTY; })
    );
};

@NgModule({
  declarations: [
    LIBROS_COMPONENTES,
  ],
  exports: [
    LIBROS_COMPONENTES,
    // LibrosComponent,s
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([
      { path: '', component: LibrosComponent },
      { path: 'add', component: LibrosComponent },
      { path: ':id/edit', component: LibrosComponent },
      { path: ':id', component: LibrosComponent, resolve: { elemento: DatosResolveFn } },
      { path: ':id/:kk', component: LibrosComponent },
    ]),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentModule, MyCoreModule,
  ]
})
export class LibrosModule { }
