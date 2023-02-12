import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http : HttpClient, private router : Router) { }

  
  /* Register a Washer */
  registerWasher(user:any) : Observable<any>{
    return this.http.post(`${washerBaseURL}/washer/addwasher`,user, this.httpOptions);
  }
  
  /* Login a washer*/
  loginWasher(user:any) : Observable<any>{
    return this.http.post(`${washerBaseURL}/washer/auth`,user, this.httpOptions )
  }

  /* Logout a washer */
  logoutWasher(){
    localStorage.removeItem('wjwt');
    this.router.navigate(['/home']);
  }

  /* Check if token exists */
  loggedIn(){
    return !!localStorage.getItem('wjwt')
  }

  /* Fetch Token */
  getToken(){ 
    return localStorage.getItem('wjwt')
  }


}

