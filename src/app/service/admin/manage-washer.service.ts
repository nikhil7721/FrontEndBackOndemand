import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageWasherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient, private router: Router) { }

  washerdetail(): Observable <any> {
    return this.http.get(`${adminBaseURL}/admin/allwashers`);
  }}