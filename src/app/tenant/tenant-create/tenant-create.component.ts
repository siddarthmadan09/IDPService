import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Tenant } from '../tenant';
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import {TenantService} from '../tenant.service';
declare var $: JQueryStatic;
@Component({
  selector: 'app-tenant-create',
  templateUrl: './tenant-create.component.html',
  styleUrls: ['./tenant-create.component.css'],
  
})
 
export class TenantCreateComponent implements OnInit {

  createModalClicked:boolean=false;
  edited:boolean=true;
TenantForm: FormGroup;
tenant:Tenant;
@Output() created=new EventEmitter<boolean>();
@Output() modalCloseOnCancel=new EventEmitter<any>();
formErrors = {
	'name':'',
	'description':'',
	'emailAddress':''
}
  constructor(public fb:FormBuilder,private _tenantService:TenantService) { 

}
  ngOnInit() {
    console.log("hello");
  this.buildForm();
  }
 buildForm(){
  this.TenantForm = this.fb.group({
     id:[""],
    name:["",Validators.required],
    description:["",Validators.required],
    emailAddress:["",[Validators.required]
    ]
   });
 }
  onSubmit(tenant:Tenant,event:Event){
   event.preventDefault();
  this._tenantService.push.emit(tenant);
   this._tenantService.addTenants(tenant).subscribe(response=>console.log(response));
  this.buildForm();
}
cancelModalonCancel(){
  this.modalCloseOnCancel.emit("modalCloseOnCancel");
}
}
