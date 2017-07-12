import { Component, OnInit, Renderer, Input, EventEmitter, Output } from '@angular/core';
import {TenantService} from './tenant.service';
import {Tenant} from './tenant';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var $: JQueryStatic;
@Component({
  selector: 'app-tenant-new',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css'],
  animations :[
    trigger('divState',[
      state('normal',style({
    'background-color':'red',
    color:'black'
      })),
      state('highlight',style({
    'background-color':'yellow',
    color:'blue'
      }))
    ])
  ]

})
export class TenantComponent implements OnInit {
  state='normal';
  createModalClicked:boolean=false;
createTenant: Boolean = false;
editTrue: Boolean = false;

@Output() tenantNotClicked:EventEmitter<any> = new EventEmitter();

constructor(private _tenantService:TenantService){
}

ngOnInit() {
//let clicked =JSON.parse(localStorage.getItem("tenantClicked"));
//  localStorage.setItem('tenantClicked',JSON.stringify(!clicked));
   let tenantClicked =JSON.parse(localStorage.getItem("tenantClicked"));
   console.log(tenantClicked);
if(tenantClicked===true) this._tenantService.tenantClicked.emit(true);


}
modalClicked(){
  this.createModalClicked=true;
  setTimeout(function(){
$('.mymodal').modal('show'); 
},10);
    
} 
closeModalOnSave(){
$('.mymodal').modal('hide'); 
 this.createModalClicked=false;
 console.log("modal clsoe");
}
closeModalonCancel(){
  this.createModalClicked=false;
   console.log("modal clsoe on cane\cel");
}
clickedTenant(event:Event){
  
this._tenantService.clickedTenant(true);

	
}

ngOnDestroy(){
	
}

}
(function( $ ) {
})(jQuery);


