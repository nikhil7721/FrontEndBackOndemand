import { Component, OnInit } from '@angular/core';
import { PlanservicesService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service=[] as any;
    constructor(private _planService: PlanservicesService) { }
  
    ngOnInit(): void {
      this._planService.services()
        .subscribe(
          res =>this.service = res,
          err => console.log(err)
        )
    }
  }