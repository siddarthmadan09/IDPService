import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
@Injectable()
export class UsergroupService {
private usergroupUrl="http://localhost:8082/usergroup";
  constructor(private http:Http) { }

getUsergroups(id:String){
	return this.http.get(this.usergroupUrl+"?tenantId="+id).map(this.extractData);
}
private extractData(res: Response) {
    let body;

    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
  
    return body || {};
}
deleteUsergroup(id:string){
    return this.http.delete(this.usergroupUrl+"/"+id).map(this.extractData);
}
}
