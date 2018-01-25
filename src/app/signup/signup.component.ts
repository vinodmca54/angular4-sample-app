import { Component, OnInit,Input} from '@angular/core';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Router }  from '@angular/router';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  constructor(public http : Http, public _router:Router) { }

    userobj = {};

    submituserdetails(userdata:any){
              
          userdata.umobilenum = "9494437121";
          this.userobj ={
          		username:userdata.uname,
          		usermobilenum:userdata.umobilenum,
          		usermail:userdata.usermmail,
          		userpassword:userdata.upassword
          }

          console.log(this.userobj);

          this.http.post('/userdata',this.userobj)
           .subscribe((res:any) => {
               let data = res.json();
               console.log(data);  
               this._router.navigate(['/login']); 
		    })
	};
         
     

	ngOnInit() {

	}

}
