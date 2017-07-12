import { Component, OnInit } from '@angular/core';
import {AuthMethodConfig} from './authmethodconfig.model';
import {ActivatedRoute,Params} from '@angular/router';
import {AuthmethodconfigService} from './authmethodconfig.service';
import { AuthmethodService } from "../authmethod/authmethod.service";
@Component({
  selector: 'app-authmethodconfig',
  templateUrl: './authmethodconfig.component.html',
  styleUrls: ['./authmethodconfig.component.css'],
  providers:[AuthmethodconfigService,AuthmethodService]
})
export class AuthmethodconfigComponent implements OnInit {
authmethodConfigList:AuthMethodConfig[];
id:string;
  constructor(private route:ActivatedRoute,private authmethodconfigService:AuthmethodconfigService) { }

  ngOnInit() {
     this.route.params.subscribe(params=>this.id=params['id']);
     this.authmethodconfigService.getAuthMethodConfigByTenantId(this.id).subscribe(authmethodconfig=>{
       this.authmethodConfigList=authmethodconfig;
        console.log(this.authmethodConfigList);
  })

}
}
