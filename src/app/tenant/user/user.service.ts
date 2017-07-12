
import { Injectable,Output,EventEmitter} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from './user';
import { ReplaySubject } from "rxjs/ReplaySubject";

@Injectable()
export class UserService {
users:User[];
private _url="http://localhost:8082/user";
private _urlUser="http://localhost:8082/user";
add:ReplaySubject<User> = new ReplaySubject(1);
update:ReplaySubject<User> = new ReplaySubject(1);
delete:ReplaySubject<string> = new ReplaySubject(1);
  constructor(private _http : Http) { }

getUsers(id:string){

	  this._http.get(this._urlUser+"?tenantId="+id).map(this.extractData).subscribe(users=>{
      this.users=users});
	 return this._http.get(this._urlUser+"?tenantId="+id).map(this.extractData);
}
getAllUsers(){
	return this.users;
}
getUser(id:String){
console.log(this._urlUser+"/"+id);
	return this._http.get(this._urlUser+"/"+id).map(this.extractData);
}

private extractData(res: Response) {
    let body;

    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
  
    return body || {};
}
addUser(user:User){
  let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
console.log(user);
 return this._http.post(this._urlUser, user)
.map(this.extractData);
}
updateUser(user: User) {
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
console.log(user);
 return this._http.put(this._urlUser, user)
.map(this.extractData);

}
deleteUser(id:String){
   return this._http.delete(this._urlUser+"/"+id).map(this.extractData);
}
}
