import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { AuthServiceService } from 'src/app/service/customer/auth-service.service';
import { AuthService } from 'src/app/service/washer/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  selected="Customer";
  emailError ='';
  passwordError ='';
  constructor(private router : Router, private _auth : AuthServiceService,private _washerauth:AuthService) { }

  ngOnInit(): void {
  }

   /* Show and hide password */
  // showpass(x,text){
  //    if (x.type === "password") {
  //      x.type = "text";
  //      text.text = "Hide"
  //    } else {
  //      text.text ="Show";
  //      x.type = "password";
  //    }
  // }

   /* Login the user */
  login(customer:any){

    this.emailError =''; 
    this.passwordError='';

    if(customer.value.role == 'Customer'){
      let user = { Email: customer.value.cEmail, Password : customer.value.cPassword};
      this._auth.loginCustomer(user)
      .subscribe(
        res => {
          localStorage.setItem('customer',res.token)
          this.router.navigate(['/customerdashboard/customerhome'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

    if(customer.value.role == 'Washer'){
      let user = { email: customer.value.wEmail, password : customer.value.wPassword};
      this._washerauth.loginWasher(user)
      .subscribe(
        res => {
          localStorage.setItem('washer',res.token)
          this.router.navigate(['/washerdashboard/washerhome'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

     
  }

  /* Login with Google */
  googleLogin(){
    this._auth.googleLogin()
      .subscribe(
        res=>console.log(res),
        err => console.log(err)
      )
  }
 
}