import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private routeService: RouteService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // the code here should allow user to navigate to dashboard if he is authenticated
      // else the code should redirect to login view
      this.authService.isUserAuthenticated(this.authService.getBearerToken())
      .then((data) => {
        if(data){
          console.log('success');
          return true;
        } else{
          this.routeService.toLogin();
          return false;
        }
      })
      return true;
  }
  
}
