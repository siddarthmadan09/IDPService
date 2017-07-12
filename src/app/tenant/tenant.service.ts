import { Injectable,Output,EventEmitter} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Tenant} from './tenant';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
@Injectable()
export class TenantService {
	tenants:Tenant[];
	tenant:Tenant;
@Output() 	  tenantClicked:EventEmitter<any> = new EventEmitter<string>();
@Output() push:EventEmitter<Tenant> =new EventEmitter();
 delete:ReplaySubject<string> = new ReplaySubject(1);
 update:ReplaySubject<Tenant> = new ReplaySubject(1);
  // Observable string streams


	private _url="http://localhost:8082/tenant/getAll";
	private _urltenant="http://localhost:8082/tenant";
	private observable: Observable<any>;

	private _tenantsList: Observable<any>;
	private _tenantsSubject: Subject<Tenant>;

constructor(private _http : Http) {
  this._tenantsSubject = new ReplaySubject(1);
 }
    getTenants(): Observable<any> {
        if (!this._tenantsList) {
            this._tenantsList = this._http.get(this._url).map(this.extractData);
            this._tenantsList.subscribe(
                result =>{this.tenants=result;
this._tenantsSubject.next(result);},
                error => this._tenantsSubject.error(error)
            );
        }
        return this._tenantsSubject.asObservable();
    }
/*getTenants(){

{
if(this.tenants) {
// if `data` is available just return it as `Observable`
return Observable.of(this.tenants); 
} else if(this.observable) {
// if `this.observable` is set then the request is in progress
// return the `Observable` for the ongoing request
return this.observable;
} else {
// example header (not necessary)
let headers = new Headers();
headers.append('Content-Type', 'application/json');
// create the request, store the `Observable` for subsequent subscribers
this.observable = this._http.get(this._url, {
headers: headers
})
.map(response =>  {
// when the cached data is available we don't need the `Observable` reference anymore
this.observable = null;
console.log(response);
if(response.status == 400) {
return "FAILURE";
} else if(response.status == 200||response.status == 202) {
this.tenants = new Array<Tenant>(response.json());
console.log(this.tenants);
return this.tenants;
}
// make it shared so more than one subscriber can get the result
});
return this.observable;
}
}
}*/

getTenant(id):Observable<Tenant>{
return this._http.get(this._urltenant+"/"+id).map(this.extractData);
}


/*getTenant(id){
console.log(this.tenants);
for (let tenantitem of this.tenants) {
if(tenantitem.id===id){
this.tenant=tenantitem
}
}
return this.tenant;
}*/


addTenants(tenant: Tenant) {
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
return this._http.post(this._urltenant, JSON.stringify(tenant), options)
.map(this.extractData);

}
updateTenant(tenant: Tenant) {
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.put(this._urltenant, tenant)
.map(this.extractData);

}
deleteTenant(id){
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
console.log(this._urltenant+"/"+id);
return this._http.delete(this._urltenant+"/"+id,options).map(this.extractData);

}
private extractData(res: Response) {
let body;

// check if empty, before call json
if (res.text()) {
body = res.json();
}

return body || {};
}
clickedTenant(value:boolean){
	console.log("ten servuce");
this.tenantClicked.emit("clicked");
}
isLoggedIn(){
	return false;
}
}
