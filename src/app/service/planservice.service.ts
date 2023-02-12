import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL, orderBaseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlanservicesService {

  constructor(private http:HttpClient) { }
  services(): Observable<any>{

    return this.http.get(`${orderBaseURL}/order/allpacks`);

}
}
