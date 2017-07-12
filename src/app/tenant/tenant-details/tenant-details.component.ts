import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {TenantService} from '../tenant.service';
import {Tenant} from '../tenant';
@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {
id:string;
tenant:Tenant;
  constructor(private route:ActivatedRoute,private tenantService:TenantService,private router:Router) { }

  ngOnInit() {
  
   this.route.queryParams.subscribe(params=>this.id=params['tenantId']);
   console.log(localStorage.getItem('id'));
   if(typeof this.id == 'undefined'){
this.id= localStorage.getItem('id');
   }
  
  
  }

  deleteTenant(id:number){

this.tenantService.deleteTenant(id).subscribe(response=>console.log(response));
}
navigateUserGroup(){

this.router.navigate(['/userGroup'],{queryParams:{tenantId:this.id}});
}
navigateUser(){

this.router.navigate(['/user'],{queryParams:{tenantId:this.id}});
}
navigatePermission(){

this.router.navigate(['/permission'],{queryParams:{tenantId:this.id}});
}
}