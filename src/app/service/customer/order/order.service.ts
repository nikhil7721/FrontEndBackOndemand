import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customerBaseURL, orderBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, private router: Router) { }

  
/* Create a new order */
createOrder(order:any): Observable<any> {
  return this.http.post(`${orderBaseURL}/order/addorder`,  order, this.httpOptions);
}

}
