import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { Authworkflow } from "../authworkflow.model";
import { AuthworkflowService } from "../authworkflow.service";
@Component({
  selector: 'app-authworkflow-edit',
  templateUrl: './authworkflow-edit.component.html',
  styleUrls: ['./authworkflow-edit.component.css']
})
export class AuthworkflowEditComponent implements OnInit {
id:string;
authworkflowForm: FormGroup;
@Input() authworkflowitem:Authworkflow;
 @Input() pk: any;
  @Input() lg: boolean = false;
  constructor(private fb:FormBuilder,private authworkflowservice:AuthworkflowService ) { }

  ngOnInit() {
    this.buildForm();
  }
buildForm() {
  
  this.authworkflowForm=this.fb.group({
    id:[this.authworkflowitem.id,Validators.required],
    name:[this.authworkflowitem.name,Validators.required],
    description:[this.authworkflowitem.description,Validators.required],
    authMethodConfigList:[this.authworkflowitem.authMethodConfigList,Validators.required],
    tenantId:[this.authworkflowitem.tenantId,Validators.required],
   
  })

}
}
