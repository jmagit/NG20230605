import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoreModule } from 'src/lib/my-core';
import { MainModule } from '../main';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MyCoreModule,
  ]
})
export class SecurityModule { }
