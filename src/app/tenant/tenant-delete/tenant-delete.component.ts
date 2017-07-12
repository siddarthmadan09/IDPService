import { Component, OnInit,Input } from '@angular/core';
import {TenantService} from '../tenant.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tenant-delete',
  templateUrl: './tenant-delete.component.html',
  styleUrls: ['./tenant-delete.component.css']
})
export class TenantDeleteComponent implements OnInit {
  
  @Input() del: any;
@Input() lg: boolean = false;
  constructor(private tenantService:TenantService,private router:Router) { }

  ngOnInit() {
   
 // this.tenantService.deleteUser(this.pk).subscribe(response=>console.log(response));
  }
  deleteTenant(id:string,event:Event){
     event.preventDefault();
     $('.mymodal').modal('hide');
this.tenantService.deleteTenant(id).subscribe(response=>console.log(response)); 
this.tenantService.delete.next(id);  
this.router.navigate(["tenant"]);
}
  }

