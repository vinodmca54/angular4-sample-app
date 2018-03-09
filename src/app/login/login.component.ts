import { Component, OnInit } from '@angular/core';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 

    loginobject = {};
	
  constructor(public http : Http, public _router:Router) { }

	   submituserlogindetails(logindetails:any):void{
	   		
	   		this.loginobject = {
	   			 Usermail: logindetails.usermail,
	   			 Userpassword:logindetails.userpassword
	   		}

	   		this.http.post('/login',this.loginobject)
           	 .subscribe((res:any) => {
               let data = res.json();
               console.log(data.token);
               sessionStorage.setItem('jwttoken', data.token);
               if(data.status == false){
               		this._router.navigate(['/login']); 
               }else{
                  this._router.navigate(['/videos']); 
               }
		    })
	   }

	  ngOnInit() {

	  }

}
