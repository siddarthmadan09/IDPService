import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import {AuthmethodconfigService} from '../authmethodconfig.service';
import {AuthMethodConfig} from '../authmethodconfig.model';
import {AuthmethodService} from '../../authmethod/authmethod.service';
import {Authmethod} from '../../authmethod/authmethod.model';

@Component({
  selector: 'app-authmethodconfig-create',
  templateUrl: './authmethodconfig-create.component.html',
  styleUrls: ['./authmethodconfig-create.component.css']
})
export class AuthmethodconfigCreateComponent implements OnInit {

tenantId:String;
authmethod:Authmethod[];
authmethodConfigForm: FormGroup;
authmethodconfig:AuthMethodConfig;
authmethodsFormGroup: FormGroup = new FormGroup({});
auth:any=[];
authmethods:Authmethod[];
  constructor(private fb:FormBuilder,private authmethodconfigService:AuthmethodconfigService,private authmethodService:AuthmethodService) { }

  ngOnInit() {
  this.tenantId = sessionStorage.getItem('id');
  this.buildForm();
this.authmethodService.getActiveAuthMethods().subscribe(authmethods=>{
  this.authmethod=authmethods;

  }
  );
}   
buildForm(){
  this.authmethodConfigForm = this.fb.group({
    name:[""],
    description:["",Validators.required],
    authMethod:[""],
    tenantId:[this.tenantId,Validators.required],
    configurationList:[""]
   });
 }
  onSubmit(authmethodconfig:any,event:Event){
     event.preventDefault();
    let authmethodList=[];
    console.log(this.auth);
    for (let key in this.auth) {
      authmethodList.push({ id: key });
    }
    authmethodconfig.authmethod= authmethodList;
   console.log(authmethodconfig);
  // this.authmethods = this.authmethod.find((authmethod=>authmethod.id==authmethodList.id))
//  this.authmethodconfigService.push.emit(tenant);
  

 // this.authmethodconfigService.addAuthmethodConfig(authmethodconfig).subscribe(response=>console.log(response));
  this.buildForm();
  }


}
