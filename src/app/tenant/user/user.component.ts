import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';
import {UsergroupService} from '../usergroup/usergroup.service';
import {Tenant} from '../tenant';
import { TenantService } from "../tenant.service";
import { PlatformLocation } from '@angular/common';
declare var $:JQueryStatic;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService,UsergroupService,TenantService]
})
export class UserComponent implements OnInit {
  uid: string;
 
  id: string;
userCreateClicked:boolean=false;
users: User[];
userSelected:boolean=false;
  constructor(private route:ActivatedRoute,private _userService:UserService,private _tenantService:TenantService,private router:Router) { }

  ngOnInit() {
    let tenantClicked =JSON.parse(localStorage.getItem("tenantClicked"));
  
  this.id=this.route.snapshot.queryParams['tenantId'];
  this.route.queryParams.subscribe(params=>this.id=params['tenantId']);
 this._userService.add.subscribe(user=>this.pushUsers(user));
  this._userService.getUsers(this.id).subscribe(user=>{
  this.users=user;


  });


}
pushUsers(user:User){
this.users.push(user);
}
/**user create button clicked-modal open */
userCreateModalClicked(){
 this.userCreateClicked=true;
  setTimeout(function(){
$('.userCreateModal').modal('show'); 
},10);
}
userClicked(id:string){
  console.log("user clicked");
  this.userSelected=true;
  this.uid=id;
}
}
