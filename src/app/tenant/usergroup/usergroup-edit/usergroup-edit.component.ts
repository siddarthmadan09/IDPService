import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import {UsergroupService} from '../usergroup.service';
import {UserGroup} from '../usergroup';
import { Permission } from "../../permissions/permission";
import { PermissionService } from "../../permissions/permission.service";
@Component({
  selector: 'app-usergroup-edit',
  templateUrl: './usergroup-edit.component.html',
  styleUrls: ['./usergroup-edit.component.css']
})
export class UsergroupEditComponent implements OnInit {
@Input() usergroup:UserGroup;
tenantId:String;
UsergroupForm: FormGroup;
userGroup:UserGroup;
permissions:Permission[];
Selectedpermissions:Permission[]=[];

  constructor(private fb:FormBuilder,private _usergroupService:UsergroupService,private permissionService:PermissionService) { }

  ngOnInit() {  this.tenantId = sessionStorage.getItem('id');
  this.buildForm();
  this.permissionService.getPermissions(this.tenantId).subscribe(Permissions=>{
    this.permissions=Permissions;
    console.log(this.permissions);
  });}

  buildForm(){
  this.UsergroupForm = this.fb.group({
		name:[this.usergroup.name,Validators.required],
		description:[this.usergroup.description,Validators.required],
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
