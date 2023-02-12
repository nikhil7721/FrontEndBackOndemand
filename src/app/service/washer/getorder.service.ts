import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetOrderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient, private router: Router) { }

  orderdetails(): Observable <any> {
    return this.http.get(`${adminBaseURL}/admin/getallorders`);
  }}