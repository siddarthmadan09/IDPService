import { Component, OnInit } from '@angular/core';
import { Authworkflow } from "../authworkflow.model";
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import { AuthMethodConfig } from "../../authmethodconfig/authmethodconfig.model";
import { AuthmethodconfigService } from "../../authmethodconfig/authmethodconfig.service";
import { AuthworkflowService } from "../authworkflow.service";
@Component({
  selector: 'app-authworkflow-create',
  templateUrl: './authworkflow-create.component.html',
  styleUrls: ['./authworkflow-create.component.css']
})
export class AuthworkflowCreateComponent implements OnInit {
  selectedAuthWorkflow: any=Array<AuthMethodConfig>();
  tenantId: string;
AuthWorkflow:Authworkflow[];
authworkflowForm: FormGroup;
authmethodconfig:AuthMethodConfig[];
authmethodsFormGroup: FormGroup = new FormGroup({});
auth:any=[];
   items = [
            {name: "Apple", type: "fruit"},
            {name: "Carrot", type: "vegetable"},
            {name: "Orange", type: "fruit"}];
  constructor(private fb:FormBuilder,private authmethodconfigService:AuthmethodconfigService,private authworkflowService:AuthworkflowService) { }

  ngOnInit() {
    this.tenantId = sessionStorage.getItem('id');
    this.authmethodconfigService.getAuthMethodConfigByTenantId(this.tenantId).subscribe(authmethodconfig=>{
    this.authmethodconfig=authmethodconfig;
    console.log(this.authmethodconfig);
  })
   this.buildForm();
  }
 buildForm() {
  this.authworkflowForm = this.fb.group({
    name:[""],
    description:["",Validators.required],
    tenantId:[this.tenantId,Validators.required],
    authMethodConfigList:[this.selectedAuthWorkflow,Validators.required]
   });
 }
  onSubmit(authworkflowconfig:any,event:Event){
     event.preventDefault();
    let authmethodList=[];
    console.log(this.auth);
    for (let key in this.auth) {
      authmethodList.push({ id: key });
    }
 console.log(authworkflowconfig);
 //  this.authworkflowService.addAuthworkflow(authworkflowconfig);
  }
   onItemDrop(e: any) {
        // Get the dropped data here 
this.selectedAuthWorkflow.push(e.dragData);
    }

}
