import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/customer/auth-service.service';
import { AuthService } from 'src/app/service/washer/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selected= "Customer";
  emailError ='';
  passwordError ='';
  showMessage = false;
  succcessMsg = 'Thanks for registration! You will notified via mail after the admin approval.';
  constructor(private router : Router, private _auth: AuthServiceService,private _washerauth:AuthService) { }

  ngOnInit(): void {
    this.showMessage= false;
  }

  /* Show and hide password */
  // showpass(x,text)
  // {
  //   if (x.type === "password") {
  //     x.type = "text";
  //     text.text = "Hide"
  //   } else {
  //     text.text ="Show";
  //     x.type = "password";
  //   }
  // }

  /* Register the user */
  register(customer:any)
  {
    this.emailError= ''; this.passwordError='';
    if(customer.value.role == 'Customer'){
      let user = { cEmail: customer.value.cEmail, cPassword : customer.value.cPassword,cPhone:customer.value.cPhone,cId:customer.value.cId,cAddress:customer.value.cAddress,cName:customer.value.cName,};
      this._auth.registerCustomer(user)
      .subscribe(
        res => {
          localStorage.setItem('customer',res.token)
          this.router.navigate(['/customerdashboard/customerhome'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

    if(customer.value.role == 'Washer'){
      let user = { email: customer.value.email, password : customer.value.password};
     this._washerauth.registerWasher(user)
      .subscribe(
        res => {
          customer.reset();
          this.showMessage = true;
        },
        err => {
         this.emailError =err.error.email; 
          this.passwordError = err.error.password;
          console.log(err);
        }
      )
    }
     
  } 


}