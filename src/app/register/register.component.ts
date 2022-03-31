import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imovel : any = {
    isWifi: false,
    isTV: false,
    isKitchen:false,
    numberOfBeds:0,
    description: "",
    available_dates: "",
    price: 0.0,
  }
  constructor(private router : Router, private service : UserService,
    private snackBar: MatSnackBar) { }

    OnChanges():void{

    }
  ngOnInit(): void {
  }
  postImovel(): void {
    this.service.postImovel(this.imovel).subscribe( () =>{
      this.service.showMessage("Registration Successfully")
      this.router.navigate([''])} )

  }

  cancel(){ //only test route will be deleted
    this.service.showMessage("Operation Canceled!")
    this.router.navigate(['']);

}
}
