import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent, PageNotFoundComponent  } from './main';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
// import { LibrosComponent } from './libros';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
import { AuthCanActivateFn, AuthWithRedirectCanActivate, InRoleCanActivateChild, InRoleCanActivateChildFn, LoginFormComponent, RegisterUserComponent } from './security';

export function svgFiles(url: UrlSegment[]) {
  return url.length === 1 && url[0].path.endsWith('.svg') ? ({ consumed: url }) : null;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent, title: 'Curso de Angular' },
  { path: 'demos', component: DemosComponent, title: 'Demos' },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, title: 'Calculadora' },
  { path: 'contactos', component: ContactosListComponent, canActivate: [ AuthWithRedirectCanActivate('/login')] },
  { path: 'contactos/add', component: ContactosAddComponent },
  { path: 'contactos/:id/edit', component: ContactosEditComponent },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'alysia/baxendale', redirectTo: '/contactos/43' },
  // {
  //   path: 'libros', children: [
  //     { path: '', component: LibrosComponent },
  //     { path: 'add', component: LibrosComponent },
  //     { path: ':id/edit', component: LibrosComponent },
  //     { path: ':id', component: LibrosComponent },
  //     { path: ':id/:kk', component: LibrosComponent },
  //   ], canActivate: [ AuthWithRedirectCanActivate('/login')], canActivateChild: [InRoleCanActivateChildFn], data: { roles: ['Empleados']}
  // },
  {
    path: 'libros', loadChildren: () => import('./libros/modulo.module').then(mod => mod.LibrosModule),
    canActivate: [ AuthWithRedirectCanActivate('/login')],
    canActivateChild: [ InRoleCanActivateChild('Empleados') ]
  },

  { matcher: svgFiles, component: GraficoSvgComponent },

  { path: 'login', component: LoginFormComponent },
  { path: 'registro', component: RegisterUserComponent },

  { path: 'config', loadChildren: () => import('./config/config.module') },

  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404.html' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
