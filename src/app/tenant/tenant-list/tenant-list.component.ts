import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {Tenant} from '../tenant';
import {TenantService} from '../tenant.service';
import {Router} from '@angular/router';
@Component({
selector: 'app-tenant-list',
templateUrl: './tenant-list.component.html',
styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit  {
@Output()  tenantCreated:EventEmitter<any> = new EventEmitter();
  updateSubscription: any;
  public p: number = 1;
 public currentPage:number = 1;
  public totalItems:number = 15; // total numbar of page not items 
  public maxSize:number = 3; // max page size 
  
index:number;
tenantss:Tenant[];
tenants:Tenant[];
createTenant: Boolean = false;
@Input() tenant:Tenant;
@Output() clicked:EventEmitter<any> = new EventEmitter();
userFilter: any = { name: '' };
constructor(private _tenantService:TenantService) { 
}
ngOnInit(){

	this.getTenants();
	this._tenantService.push.subscribe(tenant=>{
    this.pushTenants(tenant);
    this.tenantCreated.emit("tenantCreated");
  });
  this._tenantService.delete.subscribe(id=>{console.log("tenatlist delte");this.deleteTenant(id)});
this._tenantService.update.subscribe(newtenant=>{console.log("tenatlist update");this.updateTenant(newtenant)});
}

getTenants(){

this._tenantService.getTenants().subscribe(tenants=>{
this.tenants=tenants;
});
/**/

}
pushTenants(tenant:Tenant){

	this.tenants.push(tenant);
  
}
updateTenant(newTenant:Tenant){
  this.index=this.tenants.findIndex(tenant=>tenant.id==newTenant.id);

  this.tenants.splice(this.index,1,newTenant);

  
}
deleteTenant(id:string){
  this.index=this.tenants.findIndex(tenant=>tenant.id==id);
this.tenants.splice(this.index,1);
}
openTenant(){
	this.createTenant = !this.createTenant;
}
clickedTenant(event:Event){
  this.clicked.emit("clicked");
}
 public setPage(pageNo:number):void {
    this.currentPage = pageNo;    
  };
 
  public pageChanged(event:any):void {
//this method will trigger every page click  
  
  };
}
