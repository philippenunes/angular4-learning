import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';

export class CursosGuard implements CanActivateChild {

    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log("Guarda de rota filha");
            return true;
        }

}