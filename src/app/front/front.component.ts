import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

    inpObj = {
      username : "",
      password : "",
      emailid : "",
      phonenumber : "" ,
      city : ""
    }
  constructor() { }

  ngOnInit(): void {
  }

  @Output() resObj = new EventEmitter<any>();
  showResult(){
    this.resObj.emit(this.inpObj);
  }

}
