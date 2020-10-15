import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  /// the url to authentication server
  authenticationUrl = "http://localhost:3000/auth/v1/"

  // inject the dependency required for making http calls
  constructor(private httpClient: HttpClient) { }

  /// Method for authenticating user based on the username and password provided in loginDetail
  authenticateUser(loginDetail): Observable<Object>{
    return this.httpClient.post(this.authenticationUrl, loginDetail);
  }

  /// Method for setting the bearer token to localstorage
  setBearerToken(token:string): void{
    localStorage.setItem('authToken', token);
  }

  /// Method for getting the bearer token from localstorage
  getBearerToken(): string{
    return localStorage.getItem('authToken');
  }

  /// Method for removing the bearer token from localstorage
  removeBearerToken(): void{
    localStorage.removeItem('authToken');
  }

  /// Checks whether the user token is valid or not
  isUserAuthenticated(token:string): Promise<boolean>{
    return this.httpClient.post(this.authenticationUrl + 'isAuthenticated', {},{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
    .pipe(map(response => response['isAuthenticated'])).toPromise();
  }
}
