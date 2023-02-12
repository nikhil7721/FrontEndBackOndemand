import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageCustomerService } from 'src/app/service/admin/manage-customer.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  constructor(private _allcustomers:ManageCustomerService, private router:Router) { }
  details=[] as any;

  ngOnInit(): void {
    this.details =[] ;
        this._allcustomers.customerdetail()
        .subscribe(
          res => this.details=res,
          err => console.log(err)
        )
  }
}