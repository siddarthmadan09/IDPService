import { Component, OnInit } from '@angular/core';
import { AuthmethodconfigService } from "../authmethodconfig/authmethodconfig.service";
import { AuthworkflowService } from "./authworkflow.service";
import { Authworkflow } from "./authworkflow.model";
import {ActivatedRoute,Params} from '@angular/router';
import { AuthMethodConfig } from "../authmethodconfig/authmethodconfig.model";
import { AuthmethodService } from "../authmethod/authmethod.service";
@Component({
  selector: 'app-authworkflow',
  templateUrl: './authworkflow.component.html',
  styleUrls: ['./authworkflow.component.css'],
  providers:[AuthmethodconfigService,AuthworkflowService,AuthmethodService]
})
export class AuthworkflowComponent implements OnInit {
  authwfid:string;
  id:string;
authworkFlowitem:Authworkflow;
authmethodconfig:AuthMethodConfig;
  constructor(private route:ActivatedRoute,private AuthworkflowService:AuthworkflowService) { }

  ngOnInit() {
  this.route.params.subscribe(params=>this.id=params['id']);
    this.AuthworkflowService.getAuthWorkFlowById(this.id).subscribe(authworkflow=>{
this.authworkFlowitem=authworkflow;
this.authwfid=this.authworkFlowitem.id;
this.authmethodconfig=authworkflow.authMethodConfigList;
console.log(this.authmethodconfig);
    })
  }

}
