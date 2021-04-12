import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authSvc: AuthService, private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authSvc.verificaAuth()
      .pipe(
        tap( autenticado => {
          if (!autenticado ){
            this.router.navigate(['./auth/login'])
          }
        })
      );
    }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.authSvc.verificaAuth()
      .pipe(
        tap( autenticado => {
          if (!autenticado ){
            this.router.navigate(['./auth/login'])
          }
        })
      );
  }

}
