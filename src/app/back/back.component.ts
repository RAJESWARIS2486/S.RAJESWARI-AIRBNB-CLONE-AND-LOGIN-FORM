import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor() { }

  @Input('dataObj') resobj:any; 
  @Input('dataObj1') newzobj1:any; 

  ngOnInit(): void {
    this.resobj = {
      username : "",
      password : "",
      emailid : "",
      phonenumber : "" ,
      city : ""
    }
  }

}
