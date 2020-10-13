import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  authenticationUrl = "http://localhost:3000/auth/v1/"

  // inject the dependency required for making http calls
  constructor() { }

  authenticateUser(){    
    //this function should make a post request to auth api with user credentials (username and password)
    // the response should be returned to the calling method
  }

  setBearerToken(){
    // this method should store the authentication token to local storage
  }
  
  getBearerToken(){
    // this method should return the authentication token stored in local storage
  }

  removeBearerToken(){
    // this method should clear the token stored in local storage
  }

  isUserAuthenticated(token:string){
    // this method should validate authenticity of a user - accepts the token string 
    // and returns Promise of authenticated status of user with boolean value
  }

  

}
