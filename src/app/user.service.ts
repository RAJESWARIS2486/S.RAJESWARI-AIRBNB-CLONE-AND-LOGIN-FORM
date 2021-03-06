import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UserService {

userPostUrl = 'https://airbnb-clone-spring.herokuapp.com/api/v1/createUser'

userLoginUrl = 'https://airbnb-clone-spring.herokuapp.com/api/v1/loginUser'

imovelPostUrl = 'https://airbnb-clone-spring.herokuapp.com/api/v1/createOffer'

imovelGetUrl = 'https://airbnb-clone-spring.herokuapp.com/api/v1/listAllOffer'


  constructor(private http: HttpClient, private snackBar : MatSnackBar ) { }

  showMessage(msg : string): void{
    this.snackBar.open(msg, "X",  {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
  });
  }

  postImovel(imovel : any ) : Observable<any>{
    return this.http.post<any>(this.imovelPostUrl, imovel);
  }

  getImoveis(): Observable<any[]> {
    return this.http.get<any[]>(this.imovelGetUrl);
  }

  postLogin(usuario : any ) : Observable<any>{
    return this.http.post<any>(this.userLoginUrl, usuario);
  }

  postCreate(usuario : any ) : Observable<any>{
    return this.http.post<any>(this.userPostUrl, usuario);
  }

}
