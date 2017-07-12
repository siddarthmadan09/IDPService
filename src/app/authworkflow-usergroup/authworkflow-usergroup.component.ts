import { Component, OnInit,Input } from '@angular/core';
import { AuthmethodconfigService } from "../authmethodconfig/authmethodconfig.service";
import { AuthMethodConfig } from "../authmethodconfig/authmethodconfig.model";
import { AuthworkflowUsergroup } from "./authworkflow-usergroup.model";
import { AuthworkflowUsergroupService } from "./authworkflow-usergroup.service";
import {ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-authworkflow-usergroup',
  templateUrl: './authworkflow-usergroup.component.html',
  styleUrls: ['./authworkflow-usergroup.component.css'],
  providers:[AuthmethodconfigService,AuthworkflowUsergroupService]
})
export class AuthworkflowUsergroupComponent implements OnInit {

  authwfid: string;
@Input()  id:string;
authworkFlowitem:AuthworkflowUsergroup;
authmethodconfig:AuthMethodConfig;
  constructor(private route:ActivatedRoute,private authworkflowUsergroupService:AuthworkflowUsergroupService ) { }

  ngOnInit() {
    // this.route.params.subscribe(params=>this.id=params['id']);
    this.authworkflowUsergroupService.getAuthWorkFlowById(this.id).subscribe(authworkflow=>{
  this.authworkFlowitem=authworkflow;
  console.log(authworkflow);
  this.authwfid=this.authworkFlowitem.id;
  this.authmethodconfig=authworkflow.authMethodConfigList;
 console.log(this.authmethodconfig);
    })
  }

}
