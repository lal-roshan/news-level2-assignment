import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteService {

  constructor(private router: Router) { }

  toLogin(){
    // this method should allow navigation to login component
    this.router.navigate(['login']);
  }

  toDashboard(){
    // this method should allow navigation to dashboard component
    this.router.navigate(['dashboard']);
  }
}
