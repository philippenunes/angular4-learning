import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';


@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

    constructor(private logService: LogService) { }

    getCursos() : string[] {
        this.logService.consoleLogmsg('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLogmsg(`Criando um novo curso {$curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}