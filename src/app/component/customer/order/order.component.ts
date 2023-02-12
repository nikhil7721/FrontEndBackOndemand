import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/customer/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router : Router, private _authorder:OrderService) { }

  ngOnInit(): void {
  }
  submit(order:any)
      {
    
      let user = { orderId: order.value.orderId,carName:order.value.carName,carModel:order.value.carModel,wName:order.value.wName,washPackId:order.value.washPackId,phoneNo:order.value.phoneNo,Date:order.value.Date};
      this._authorder.createOrder(user)
      .subscribe(
        res => {
          localStorage.setItem('order',res)
          
        },
       
      )
    
  }
}