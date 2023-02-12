import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { ManageCustomerComponent } from './component/admin/manage-customer/manage-customer.component';
import { ManageOrderComponent } from './component/admin/manage-order/manage-order.component';
import { ManageWasherComponent } from './component/admin/manage-washer/manage-washer.component';
import { CustomerdashboardComponent } from './component/customer/customerdashboard/customerdashboard.component';
import { CustomerhomeComponent } from './component/customer/customerhome/customerhome.component';
import { OrderComponent } from './component/customer/order/order.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceComponent } from './component/service/service.component';
import { SignupComponent } from './component/signup/signup.component';
import { GetorderComponent } from './component/washer/getorder/getorder.component';
import { WasherdashboardComponent } from './component/washer/washerdashboard/washerdashboard.component';
import { WasherhomeComponent } from './component/washer/washerhome/washerhome.component';



const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'} ,
 { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'service', component: ServiceComponent},
 { path: 'login',component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'adminlogin',component:AdminLoginComponent},
 {
  path:'admindashboard',component:AdminDashboardComponent,
  children:
  [{path:'adminhome',component:AdminHomeComponent},
{path:'managecustomer',component:ManageCustomerComponent},
{path:'managewasher',component:ManageWasherComponent},
{path:'manageorder',component:ManageOrderComponent}
]
},
 {path:'customerdashboard',component:CustomerdashboardComponent,
 children:[
   {path:'customerhome',component:CustomerhomeComponent},
   {path:'customerorder',component:OrderComponent}
 ]},
 {path:'washerdashboard',component:WasherdashboardComponent,
 children:[
   {path:'washerhome',component:WasherhomeComponent},
   {path:'getorder',component:GetorderComponent}
 ]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }