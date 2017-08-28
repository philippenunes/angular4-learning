import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from "./cursos/cursos.service";
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';
import { LogService } from './shared/log.service';
import { CriarCursosModule } from "./criar-cursos/criar-cursos.module";
import { CursosModule } from "./cursos/cursos.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursosModule,
    CursosModule
  ],
 // providers: [CursosService],
  bootstrap: [AppComponent],
  providers: [LogService]
})
export class AppModule { }
