import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { LoggerService, MyCoreModule } from 'src/lib/my-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MainModule, SecurityModule, MyCoreModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
