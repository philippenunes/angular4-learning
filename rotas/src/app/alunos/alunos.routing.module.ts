import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AlunosGuard } from "../guards/alunos.guard";

//Usando rotas filhas
const alunosRoutes = [
    {path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],    
        children: [
            {path: 'novo', component: AlunoDetalheComponent},
            {path: ':id', component: AlunoDetalheComponent},
            {path: ':id/editar', component: AlunoDetalheComponent}
        ]},  
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {
}