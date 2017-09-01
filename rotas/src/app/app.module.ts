import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
//import { AlunosModule } from './alunos/alunos.module';
//import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { routing } from "./app.routing";

import { CursosService } from "./cursos/cursos.service";
import { AlunosComponent } from './alunos/alunos.component';
import { AuthGuardService } from "./guards/auth-guard.service";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

