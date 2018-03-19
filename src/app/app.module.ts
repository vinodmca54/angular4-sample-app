import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {userdataservice} from './service/user.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideocenterComponent } from './videocenter/videocenter.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideocenterComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[{provide: LocationStrategy,useClass: HashLocationStrategy},userdataservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
