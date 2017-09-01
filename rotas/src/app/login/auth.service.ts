import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostraMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome == 'usuario@email.com' && usuario.senha == '123456') {
      this.usuarioAutenticado = true;
      this.mostraMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.mostraMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }   
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}