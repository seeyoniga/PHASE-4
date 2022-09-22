import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  //path to redirect
  {"path":"dashboard",component:DashboardComponent},
  {"path":"logout",component:LogoutComponent},
  {"path":"signup",component:SignupComponent},
  {"path":"signin",component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

