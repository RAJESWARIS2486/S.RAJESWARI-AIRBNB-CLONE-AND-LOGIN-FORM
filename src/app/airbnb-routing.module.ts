import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

    {
        path: " ",
        component : HomeComponent
    
      },
      {
        path: " ",
        component : RegisterComponent
    
      },
      {
        path: " ",
        component : LoginComponent
    
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirbnbRoutingModule { }