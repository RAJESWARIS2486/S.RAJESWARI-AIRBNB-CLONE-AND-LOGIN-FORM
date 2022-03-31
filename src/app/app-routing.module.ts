import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirbnbComponent } from './airbnb.component';
import { FormComponent } from './loginform.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path : '', component : ViewComponent },
  { path : 'loginform', component : FormComponent },
  { path : 'airbnb', component : AirbnbComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
