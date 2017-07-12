import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import {UsergroupService} from '../usergroup.service';
import {UserGroup} from '../usergroup';
import { Permission } from "../../permissions/permission";
import { PermissionService } from "../../permissions/permission.service";
@Component({
  selector: 'app-usergroup-create',
  templateUrl: './usergroup-create.component.html',
  styleUrls: ['./usergroup-create.component.css']
})
export class UsergroupCreateComponent implements OnInit {
  tenantId:String;
UsergroupForm: FormGroup;
userGroup:UserGroup;
permissions:Permission[];
Selectedpermissions:Permission[]=[];
  constructor(public fb:FormBuilder,private _usergroupService:UsergroupService,private permissionService:PermissionService) { }

  ngOnInit() {
    this.tenantId = sessionStorage.getItem('id');
  this.buildForm();
  this.permissionService.getPermissions(this.tenantId).subscribe(Permissions=>{
    this.permissions=Permissions;
    console.log(this.permissions);
  });
  }
  buildForm(){
  this.UsergroupForm = this.fb.group({
		name:["",Validators.required],
		description:["",Validators.required],
    permissionIds:[""]
	 });
  }
  onSubmit(usergroup:any,event:Event){
     event.preventDefault();
     let permissionList=[];
    console.log(this.Selectedpermissions);
    for (let key in this.Selectedpermissions) {
      permissionList.push(key);
    }
    usergroup.permissionIds= permissionList;
   console.log(usergroup);
  // this.authmethods = this.authmethod.find((authmethod=>authmethod.id==authmethodList.id))
//  this.authmethodconfigService.push.emit(tenant);
  

 // this.authmethodconfigService.addAuthmethodConfig(authmethodconfig).subscribe(response=>console.log(response));
  this.buildForm();
  }
}
