import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Authworkflow } from "./authworkflow.model";
@Injectable()
export class AuthworkflowService {
private authworkflowUrl = "http://localhost:8082/authworkflow/tenant"
  constructor(private http:Http) { }
  getAuthWorkFlowById(id:String){
 return this.http.get(this.authworkflowUrl+"/"+id).map(this.extractData);
  }
  addAuthworkflow(authworkflow:Authworkflow){
  return this.http.post(this.authworkflowUrl,authworkflow).map(this.extractData);
}
deleteAuthWorkFlow(id:string){
 return this.http.delete(this.authworkflowUrl+"/"+id).map(this.extractData);
}
updateAuthWorkFlow(authworkflow:Authworkflow){
 return this.http.put(this.authworkflowUrl,authworkflow).map(this.extractData);
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
