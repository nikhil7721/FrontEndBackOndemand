import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageWasherService } from 'src/app/service/admin/manage-washer.service';

@Component({
  selector: 'app-manage-washer',
  templateUrl: './manage-washer.component.html',
  styleUrls: ['./manage-washer.component.css']
})
export class ManageWasherComponent implements OnInit {

  constructor(private router:Router,private _getwasher:ManageWasherService) { }
  details=[] as any;

  ngOnInit(): void {
    this.details =[] ;
        this._getwasher.washerdetail()
        .subscribe(
          res => this.details=res,
          err => console.log(err)
         )}
         }
