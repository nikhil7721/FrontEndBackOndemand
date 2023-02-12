import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOrderService } from 'src/app/service/washer/getorder.service';

@Component({
  selector: 'app-getorder',
  templateUrl: './getorder.component.html',
  styleUrls: ['./getorder.component.css']
})
export class GetorderComponent implements OnInit {
  constructor(private router:Router,private _getorder:GetOrderService) { }
  details=[] as any;

  ngOnInit(): void {
    this.details =[] ;
        this._getorder.orderdetails()
        .subscribe(
          res => this.details=res,
          err => console.log(err)
        )
  }
}