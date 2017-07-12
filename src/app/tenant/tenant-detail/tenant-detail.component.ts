import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {TenantService} from '../tenant.service';
import {Tenant} from '../tenant';
declare var $:JQueryStatic;
@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {
  deleteTenantClicked:boolean=false;
  editModalClicked:boolean=false;
@Input() id: String;
tenant:Tenant;
   constructor(private route:ActivatedRoute,private tenantService:TenantService,private router:Router) { }

  ngOnInit() {

this.id= sessionStorage.getItem('id');
console.log(this.id);
 this.tenantService.update.subscribe(tenant=>{
   this.tenant=tenant;
 this.editModalClicked=false;
});
  this.tenantService.getTenant(this.id).subscribe(tenant=> this.tenant=tenant);
  
  }
editTenant(){
  this.editModalClicked=true;
  setTimeout(function(){
$('.editTenantModal').modal('show'); 
},10);
}
deleteTenant(){
  this.deleteTenantClicked=true;
  setTimeout(function(){
$('.delTenantModal').modal('show'); 
},10);
}
}