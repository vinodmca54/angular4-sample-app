import{Injectable} from '@angular/core'
import {Http,Response,Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()

export class userdataservice{
	
    constructor(private http:Http){}

    getUserdetails(){
          return this.http.get('/getuserdetails')
           .map((res:Response) => {
           console.log(res);
           return res.json();
           })
          
    }

}

