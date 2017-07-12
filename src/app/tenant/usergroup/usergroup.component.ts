import { Component, OnInit } from '@angular/core';
import {UserGroup} from './usergroup';
import {UsergroupService} from './usergroup.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { PermissionService } from "../permissions/permission.service";
declare var $: JQueryStatic;
@Component({
  selector: 'app-usergroup',
  templateUrl: './usergroup.component.html',
  styleUrls: ['./usergroup.component.css'],
  providers:[UsergroupService,PermissionService]
})
export class UsergroupComponent implements OnInit {
  userGroupCreated:boolean=false;
UserGroups: UserGroup[];
id:String;
  constructor(private usergroupService:UsergroupService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  
  this.route.queryParams.subscribe(params=>this.id=params['tenantId']);
 	this.usergroupService.getUsergroups(this.id).subscribe(usergroups=>
{this.UserGroups=usergroups;
console.log(usergroups);});
  }
usergroupCreateModalClicked(){
 this.userGroupCreated=true;
  setTimeout(function(){
$('.usergroupCreateModal').modal('show'); 
},10);
}
}
