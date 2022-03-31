import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : any = {
    email : '',
    password : ''
  }

  create : any = {
    name : '',
    password : '',
    email : '',
    cpf : '',
    phone : ''
  }
  constructor(private router : Router, private service : UserService,
    private snackBar: MatSnackBar) { }

    
  OnChanges():void{

  }

  ngOnInit(): void {
  }
  postLogin(): void {
    this.service.postLogin(this.login).subscribe( () =>{
      this.service.showMessage("Login Successfully")
      this.router.navigate([''])} )

  }

  postCreate(): void {
    this.service.postCreate(this.create).subscribe( () =>{
      this.service.showMessage("User Registration Successfully")
      this.router.navigate([''])} )

  }

  navFromIndex(){ //only test route will be deleted
    this.service.showMessage("Operation Canceled!")
    this.router.navigate(['']);
  }


}
