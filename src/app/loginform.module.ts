import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormRoutingModule } from './loginform-routing.module';
import { FormComponent } from './loginform.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    FrontComponent,
    BackComponent
  ],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    FormsModule,
  ]
})
export class LoginformModule { }
