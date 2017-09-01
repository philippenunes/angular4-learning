import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { AuthService } from "./login/auth.service";
import { AuthGuardService } from "./guards/auth-guard.service";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";

const appRoutes: Routes = [
    
    { path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuardService],
        canActivateChild: [CursosGuard]
    },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuardService],
        //canActivateChild: [AlunosGuard]    
    },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}