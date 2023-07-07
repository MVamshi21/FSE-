import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable, map, take } from 'rxjs';
import { RegistrationService } from '../registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: RegistrationService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      return this.service.isLoggedIn.pipe(
        map(data => {
          if(data===true){
            return true;
          }
          else{
            return this.router.createUrlTree(['/login']);
          }
        })
      )
    } 
    }
   
  