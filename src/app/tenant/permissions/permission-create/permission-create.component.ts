import { Component, OnInit } from '@angular/core';
import {Permission} from '../permission';
import {PermissionService} from "../permission.service";
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-permission-create',
  templateUrl: './permission-create.component.html',
  styleUrls: ['./permission-create.component.css']
})
export class PermissionCreateComponent implements OnInit {
permission:Permission;
permissionForm:FormGroup;
types=['ACCESS','RESTRICTIVE','CUSTOM'];
  constructor(private fb:FormBuilder,private _permissionService:PermissionService) { }

  ngOnInit() {
this.buildForm();
  }
  buildForm(){
this.permissionForm=this.fb.group({
	name:["",Validators.required],
	description:["",Validators.required],
	type:["",Validators.required],
	tenantId:[sessionStorage.getItem('id'),Validators.required]
})
  }
onSubmit(permission:Permission,event:Event){
   event.preventDefault();
console.log(permission);
  //this._permissionService.addPermission(permission).subscribe(response=>console.log(response));
  }
}
