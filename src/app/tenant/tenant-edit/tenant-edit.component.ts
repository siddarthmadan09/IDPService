import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tenant } from '../tenant';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {ActivatedRoute,Params} from '@angular/router';
import {TenantService} from '../tenant.service';
import {Observable} from 'rxjs/Observable';
declare var $:JQueryStatic;
@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  inputs: ['pk', 'tenant'],
  styleUrls: ['./tenant-edit.component.css'],
})
export class TenantEditComponent  {
hideModal: boolean = false;
id:string;
TenantForm: FormGroup;
@Output() modalCloseOnCancel=new EventEmitter<any>(); 
@Input() tenant:Tenant={
id:'',
'name':'',
'description':'',
'emailAddress':'',
'active':false,
'privateKey':'',
'publicKey':'',
'authMethodType':[]
}
  @Input() pk: any;
  @Input() lg: boolean = false;
formErrors = {
	'name':'',
	'description':'',
	'emailAddress':''
}
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private _tenantService:TenantService) {
  
	 

  //this.route.params.subscribe((params:Params)=>{
  //this.tenant.id=params['id'];
  //})
  
}
ngOnInit() {

	
	this.buildForm();
	
	
}
buildForm() {
this.TenantForm = this.fb.group({
	id:[this.tenant.id,Validators.required],
	name:[this.tenant.name,Validators.required],
	description:[this.tenant.description,Validators.required],
	emailAddress:[this.tenant.emailAddress,Validators.required]
	 });
 }

/*getTenant(id:String){
	this._tenantService.getTenant(this.id).subscribe( tenant => {
	const tent = JSON.stringify(tenant);
	this.tenant=JSON.parse(tent);
	this.buildForm();
	});

}*/
  
update(newTenant, event:Event){
	event.preventDefault();
 
	$('.editTenantModal').modal('hide');
	 this._tenantService.update.next(newTenant);
	this._tenantService.updateTenant(newTenant).subscribe(response=>console.log(response));
	
}
closeModalOnCancel(){
	$('.editTenantModal').modal('hide');
	this.modalCloseOnCancel.emit("modalCloseOnCancel");
}
}


