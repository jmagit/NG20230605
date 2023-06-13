import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { environment } from 'src/environments/environment';
import { DemosComponent } from './demos/demos.component';
import { CommonServicesModule } from './common-services';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MainModule, SecurityModule, MyCoreModule, CommonServicesModule,
    AppRoutingModule, GraficoSvgComponent,
  ],
  providers: [
    LoggerService,
    // { provide: LoggerService, useClass: LoggerService},
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
