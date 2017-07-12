import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AuthworkflowUsergroup } from "./authworkflow-usergroup.model";
@Injectable()
export class AuthworkflowUsergroupService {
private authworkflowUrl = "http://localhost:8082/authworkflow/usergroup";
  constructor(private http:Http) { }
 getAuthWorkFlowById(id:String){
 return this.http.get(this.authworkflowUrl+"/"+id).map(this.extractData);
  }
  addAuthworkflow(authworkflowUsergroup:AuthworkflowUsergroup){
  return this.http.post(this.authworkflowUrl,authworkflowUsergroup).map(this.extractData);
}
deleteAuthWorkFlow(id:string){
 return this.http.delete(this.authworkflowUrl+"/"+id).map(this.extractData);
}
updateAuthWorkFlow(authworkflowUsergroup:AuthworkflowUsergroup){
 return this.http.put(this.authworkflowUrl,authworkflowUsergroup).map(this.extractData);
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
