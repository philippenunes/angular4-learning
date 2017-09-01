import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if (this.authService.usuarioEstaAutenticado()) {
       return true;
    }
      this.router.navigate(['/login']);
      return false;
  }

  constructor(private authService: AuthService, private router: Router) {

  }

}
