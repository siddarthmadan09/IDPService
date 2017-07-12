import { Injectable } from '@angular/core';

import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AuthMethodConfig} from './authmethodconfig.model';
@Injectable()
export class AuthmethodconfigService {
private authconfigUrl = "http://localhost:8082/authmethodconfig"
  constructor(private http:Http) { }

  getAuthMethodConfigById(id:string){
 return this.http.get(this.authconfigUrl+"/"+id).map(this.extractData);
  }

  getAuthMethodConfigByTenantId(id:string){
      console.log(this.authconfigUrl+"/tenantId/"+id);
  return this.http.get(this.authconfigUrl+"/tenantId/"+id).map(this.extractData);
  }

  addAuthmethodConfig(authmethodconfig:AuthMethodConfig){
  return this.http.post(this.authconfigUrl,authmethodconfig).map(this.extractData);
  }
updateAuthmethodConfig(authmethodconfig:AuthMethodConfig){
return this.http.put(this.authconfigUrl,authmethodconfig).map(this.extractData);
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

