import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  authenticationUrl = "http://localhost:3000/auth/v1/"

  // inject the dependency required for making http calls
  constructor(private httpClient: HttpClient) { }

  authenticateUser(loginDetail): Observable<Object>{
    //this function should make a post request to auth api with user credentials (username and password)
    // the response should be returned to the calling method
    console.log(loginDetail);
    return this.httpClient.post(this.authenticationUrl, loginDetail);
  }

  setBearerToken(token:string): void{
    // this method should store the authentication token to local storage
    localStorage.setItem('authToken', token);
  }
  
  getBearerToken(): string{
    // this method should return the authentication token stored in local storage
    return localStorage.getItem('authToken');
  }

  removeBearerToken(): void{
    // this method should clear the token stored in local storage
    localStorage.removeItem('authToken');
  }

  isUserAuthenticated(token:string): Promise<boolean>{
    // this method should validate authenticity of a user - accepts the token string 
    // and returns Promise of authenticated status of user with boolean value
    return this.httpClient.post(this.authenticationUrl + 'isAuthenticated', {},{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
    .pipe(map(response => response['isAuthenticated'])).toPromise();
  }

  

}
