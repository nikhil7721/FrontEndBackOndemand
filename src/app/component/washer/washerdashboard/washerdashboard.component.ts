import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washerdashboard',
  templateUrl: './washerdashboard.component.html',
  styleUrls: ['./washerdashboard.component.css']
})
export class WasherdashboardComponent implements OnInit {

 
  status: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleClass(){
    this.status =!this.status;
  }

}
