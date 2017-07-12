import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {TenantService} from './tenant/tenant.service';
import { DOCUMENT } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TenantService]
})
export class AppComponent implements OnInit {
  hideMenu:boolean=false;
 tenantClicked:boolean=false;
 url:string;
 urlList=["/user","/userGroup","/permission","/authmethod","/authworkflow","/authmethodconfig"];
constructor(private router:Router,private _tenantService:TenantService,private route:ActivatedRoute,location: PlatformLocation){
    router.events.subscribe((navigation:any) => {
    this.url=navigation.url;
  for(let urlItem of this.urlList){
if(this.url.startsWith(urlItem)){this.tenantClicked=true;break;}
}
});
 location.onPopState(() => {

       this.tenantClicked=false;

    });
}
ngOnInit(){


  localStorage.setItem('tenantClicked',JSON.stringify(this.tenantClicked));
   this.tenantClicked =JSON.parse(localStorage.getItem("tenantClicked"));
  this._tenantService.tenantClicked.subscribe(clicked=>{
    this.tenantClicked= !(JSON.parse(localStorage.getItem("tenantClicked")));
    localStorage.setItem('tenantClicked',JSON.stringify(this.tenantClicked));
    console.log(this.tenantClicked);

})


}
navigateTenant(){
this.tenantClicked = !(JSON.parse(localStorage.getItem("tenantClicked")));
console.log(this.tenantClicked );
this.router.navigate(['/tenant']);
}
navigateUserGroup(){

this.router.navigate(['/userGroup'],{queryParams:{tenantId:sessionStorage.getItem('id')}});
}
navigateUser(){

this.router.navigate(['/user'],{queryParams:{tenantId:sessionStorage.getItem('id')},replaceUrl: true});
}
navigatePermission(){

this.router.navigate(['/permission'],{queryParams:{tenantId:sessionStorage.getItem('id')}});
}
navigateAuthMethod(){
this.router.navigate(['/authmethod'],{queryParams:{tenantId:sessionStorage.getItem('id')},skipLocationChange: true});
}
navigateAuthMethodConfig(){

this.router.navigate(['/authmethodconfig/tenantId/',sessionStorage.getItem('id')]);
}
navigateAuthWorkflow(){

this.router.navigate(['/authworkflow/tenant',sessionStorage.getItem('id')]);
}
navigateAuthWorkflowUserGroup(){

this.router.navigate(['/authworkflow/usergroup',sessionStorage.getItem('id')]);
}
}
