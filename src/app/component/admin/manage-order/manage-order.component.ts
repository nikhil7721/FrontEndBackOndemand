import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageOrderService } from 'src/app/service/admin/manage-order.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  constructor(private router:Router,private _getorder:ManageOrderService) { }
  details=[] as any;

  ngOnInit(): void {
    this.details =[] ;
        this._getorder.orderdetail()
        .subscribe(
          res => this.details=res,
          err => console.log(err)
        )
  }
}