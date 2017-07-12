import { Component, OnInit } from '@angular/core';
import {PermissionService} from './permission.service';
import {ActivatedRoute,Params} from '@angular/router';
import {Permission} from './permission';
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'],
  providers:[PermissionService]
})
export class PermissionsComponent implements OnInit {
permissions:Permission;
id:String;
  constructor(private permissionService:PermissionService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>this.id=params['tenantId']);
this.permissionService.getPermissions(this.id).subscribe(permissions=>
this.permissions=permissions);
  }

}
