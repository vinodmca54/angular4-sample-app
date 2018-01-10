import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {VideocenterComponent} from './videocenter/videocenter.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
   {path:'', redirectTo: '/home', pathMatch: 'full'},
   {path:'home', component: HomeComponent },
   {path:'videos', component: VideocenterComponent},
   {path:'signup', component: SignupComponent},
   {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
