import { Component, Output} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouteService } from '../services/route.service';
import { AuthenticationService } from '../services/authentication.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // implement login functionality using Reactive forms

  username = new FormControl('', [Validators.required]);
  
  password = new FormControl('', [Validators.required]);

  submitMessage = '';

  // inject the dependencies required for authentication and routing
  constructor(private authService: AuthenticationService,
              private routeService: RouteService) { 
    
  }

  ngOnInit(){
    this.authService.removeBearerToken();
  }


  loginSubmit() {
    console.log('signing in');
    // implement login validation and error handling code here
    this.authService.authenticateUser({ username: this.username.value, password: this.password.value})
    .subscribe(data => {
      this.authService.setBearerToken(data['token']);
      this.routeService.toDashboard();
    },
    error => {
      if (error.status === 403){
        this.submitMessage = 'Unauthorized';
      } else if (error.status === 404){
        this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found';
      } else{
        this.submitMessage = 'Some error occured. Please try again!!';
      }
    });
  }

  getErrorMessage() {
    // this function should return error message  
  }

  getUserNameErrorMessage() {
    if (this.username.invalid && (this.username.dirty || this.username.touched)){
      return 'Username should not be left blank';
    } else{
      return '';
    }
  }

  getPasswordErrorMessage() {
    if (this.password.invalid && (this.password.dirty || this.password.touched)){
      return 'Password should not be left blank';
    } else{
      return '';
    }
  }
}
