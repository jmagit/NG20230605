import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/my-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDADORES } from './directives/mis-validadores.directive';



@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS, PIPES_NUMERICOS, MIS_VALIDADORES,
  ],
  exports: [
    SizerComponent, PIPES_CADENAS, PIPES_NUMERICOS, MIS_VALIDADORES,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
