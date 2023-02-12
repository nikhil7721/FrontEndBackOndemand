import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceComponent } from './component/service/service.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { PlanservicesService } from './service/planservice.service';
import { AuthServiceService } from './service/customer/auth-service.service';
import { SignupComponent } from './component/signup/signup.component';
import { CustomerdashboardComponent } from './component/customer/customerdashboard/customerdashboard.component';
import { CustomerhomeComponent } from './component/customer/customerhome/customerhome.component';

import { WasherdashboardComponent } from './component/washer/washerdashboard/washerdashboard.component';
import { WasherhomeComponent } from './component/washer/washerhome/washerhome.component';
import { OrderComponent } from './component/customer/order/order.component';

import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { ManageCustomerComponent } from './component/admin/manage-customer/manage-customer.component';
import { ManageWasherComponent } from './component/admin/manage-washer/manage-washer.component';
import { ManageOrderComponent } from './component/admin/manage-order/manage-order.component';
import { GetorderComponent } from './component/washer/getorder/getorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
    ServiceComponent,
    LoginComponent,
    SignupComponent,
    CustomerdashboardComponent,
    CustomerhomeComponent,
     WasherdashboardComponent,
    WasherhomeComponent,
    OrderComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    ManageCustomerComponent,
    ManageWasherComponent,
    ManageOrderComponent,
    GetorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
    
  ],
  providers: [PlanservicesService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }