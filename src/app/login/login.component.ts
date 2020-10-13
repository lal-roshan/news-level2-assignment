import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouteService } from '../services/route.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // implement login functionality using Reactive forms


  // inject the dependencies required for authentication and routing
  constructor() { 
    
  }

  loginSubmit() {
    // implement login validation and error handling code here
  }

  getErrorMessage() {
    // this function should return error message  
  }


}
