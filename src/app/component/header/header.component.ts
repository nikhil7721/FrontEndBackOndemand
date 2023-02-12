import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menuItems = [
  {linedId:1,linkName:'Home'},
  {linedId:2,linkName:'About'},
  {linedId:3,linkName:'Contact'}
  
]
  
  constructor(private router : Router, 
            ) { };

  ngOnInit(): void {
  }
}