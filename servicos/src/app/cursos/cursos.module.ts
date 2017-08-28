import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursosService } from "./cursos.service";

@NgModule({
  declarations: [
    CursosComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [CursosComponent]
 // providers: [CursosService],
})
export class CursosModule { }
