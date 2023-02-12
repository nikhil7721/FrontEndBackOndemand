import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { adminBaseURL, customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageCustomerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient, private router: Router) { }

  customerdetail(): Observable <any> {
    return this.http.get(`${adminBaseURL}/admin/allcustomers`);
  }
}