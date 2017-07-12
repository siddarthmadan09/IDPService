import { Component, OnInit,Input,Output,EventEmitter,ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {Tenant} from '../../tenant';


import {Router} from '@angular/router';
import { UserComponent} from '../../user/user.component'
@Component({
  selector: 'app-tenant-item',
  templateUrl: './tenant-item.component.html',
  styleUrls: ['./tenant-item.component.css'],
  
})

export class TenantItemComponent implements OnInit {
 @ViewChild('childModal') public childModal:ModalDirective;
@Input() tenant:Tenant;
@Output() deleted:EventEmitter<any> = new EventEmitter();
@Output() clicked:EventEmitter<any> = new EventEmitter();
  constructor(private router:Router) { }

ngOnInit(){ }

edit(id:number){
	this.router.navigate(['tenant',id]);
}

delete(id:number,event:Event){
event.preventDefault();
console.log(id);
this.deleted.emit(id);
}
showTenant(id:string){
this.clicked.emit("clicked");
 sessionStorage.setItem('id', id );
 console.log(sessionStorage.getItem('id'));
 this.router.navigate(["/user"],{queryParams:{tenantId:id}});

}
 
  public showChildModal(id:number):void {

    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
}

