import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
imoveis : any = [{
  isWifi: false,
  isTV: false,
  isKitchen:false,
  cpf: "xxx.xxx.xxx-xx",
  description: "",
  available_dates: "",
  price: 0.0,
    street: "PublicPlace",
    uf: "UF",
    city: "UF",
}]

  constructor(private service: UserService ,private router : Router) { }

  ngOnInit(): void {
    
   this.service.getImoveis().subscribe((imovel) =>(
    this.imoveis = imovel));
 }
navForFormImovel(){
 this.router.navigate(['form/imovel']);
}

}
