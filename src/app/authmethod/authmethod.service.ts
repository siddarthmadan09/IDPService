
import { Injectable,Output,EventEmitter} from '@angular/core';
import {Authmethod} from './authmethod.model';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class AuthmethodService{
	private _authmethodUrl="http://localhost:8082/authmethod";
	constructor(private _http : Http){}
	getAllAuthMethods(){
	return this._http.get(this._authmethodUrl+"/all").map(this.extractData);
	}
	getActiveAuthMethods(){
	return this._http.get(this._authmethodUrl+"/active").map(this.extractData);
	}
	addAuthMethod(authmethod:Authmethod){
	let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
	this._http.post(this._authmethodUrl,authmethod).map(this.extractData);
	}
	private extractData(res: Response) {
    let body;

    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
  
    return body || {};
}

}