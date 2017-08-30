import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

//Usando rotas filhas
const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, children: [
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