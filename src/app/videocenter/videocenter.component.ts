import { Component, OnInit } from '@angular/core';
import {Http,Response,Request, RequestMethod} from '@angular/http';
import { Router }  from '@angular/router';  
import {userdataservice} from '../service/user.service';

@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css']
})
export class VideocenterComponent implements OnInit {

      data:any;
      userdatas:any;

      constructor(public http : Http, public _router:Router,private _userservice:userdataservice) {}

      ngOnInit() {

          this._userservice.getUserdetails()
            .subscribe((userdata) => {this.userdatas = userdata
             console.log(userdata);

            });
             

          this.http.get('/videos')
               .subscribe((res:any) => {
                    console.log(res);
                   this.data = res.json(); 
                   console.log(this.data);   
    		    })
      }

}
