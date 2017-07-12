import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { AuthmethodconfigService } from "../authmethodconfig.service";
import { AuthmethodService } from "../../authmethod/authmethod.service";
import { AuthMethodConfig } from "../authmethodconfig.model";
@Component({
  selector: 'app-authmethodconfig-edit',
  templateUrl: './authmethodconfig-edit.component.html',
  styleUrls: ['./authmethodconfig-edit.component.css']
})
export class AuthmethodconfigEditComponent implements OnInit {
id:string;
authmethodConfigForm: FormGroup;
@Input() authmethodconfig:AuthMethodConfig;
 @Input() pk: any;
  @Input() lg: boolean = false;
  constructor(private fb:FormBuilder,private authmethodconfigService:AuthmethodconfigService,private authmethodService:AuthmethodService) { }

  ngOnInit() {
    this.buildForm();
  
  }
buildForm() {
  
  this.authmethodConfigForm=this.fb.group({
    id:[this.authmethodconfig.id,Validators.required],
    name:[this.authmethodconfig.name,Validators.required],
    description:[this.authmethodconfig.description,Validators.required],
    authMethod:[this.authmethodconfig.authMethod,Validators.required],
    tenantId:[this.authmethodconfig.tenantId,Validators.required],
    configurationList:[this.authmethodconfig.configurationList,Validators.required]
  })

}
update(authmethodConfig, event:Event){
	event.preventDefault();
	
	this.authmethodconfigService.updateAuthmethodConfig(authmethodConfig).subscribe(response=>console.log(response));


}
}
