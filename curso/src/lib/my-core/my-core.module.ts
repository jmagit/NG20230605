import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/my-sizer.component';



@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS,
  ],
  exports: [
    SizerComponent, PIPES_CADENAS,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
