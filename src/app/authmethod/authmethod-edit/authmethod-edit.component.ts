import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {ActivatedRoute,Params} from '@angular/router';
import {Authmethod} from '../authmethod.model';
import {AuthmethodService} from '../authmethod.service'
@Component({
  selector: 'app-authmethod-edit',
  templateUrl: './authmethod-edit.component.html',
  styleUrls: ['./authmethod-edit.component.css']
})
export class AuthmethodEditComponent implements OnInit {
id:string;
AuthForm: FormGroup;
@Input() authmethod:Authmethod;
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private authmethodService:AuthmethodService) { }

ngOnInit() {

	
	this.buildForm();
	
	
}
buildForm() {
this.AuthForm = this.fb.group({
	id:[this.authmethod.id,Validators.required],
	name:[this.authmethod.name,Validators.required],
	description:[this.authmethod.description,Validators.required]
	 });
 }
update(authmethod, event:Event){
	event.preventDefault();
	
//	this.authmethodService.updateauth(authmethod).subscribe(response=>console.log(response));


}
}
