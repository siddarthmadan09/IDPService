import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Permission} from './permission';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class PermissionService {
private _urlpermission="http://localhost:8082/permission";
  constructor(private _http:Http) { }
getPermissions(id:String){
	 return this._http.get(this._urlpermission+"?tenantId="+id).map(this.extractData);
}
private extractData(res: Response) {
    let body;

    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
  
    return body || {};
}
addPermission(permission:Permission){
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
return this._http.post(this._urlpermission, JSON.stringify(permission), options)
.map(this.extractData);
	 
}
}

