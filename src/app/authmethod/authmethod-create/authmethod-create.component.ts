import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import {AuthmethodService} from '../authmethod.service';
import {Authmethod} from '../authmethod.model';

@Component({
  selector: 'app-authmethod-create',
  templateUrl: './authmethod-create.component.html',
  styleUrls: ['./authmethod-create.component.css']
})

export class AuthmethodCreateComponent implements OnInit {
AuthForm: FormGroup;
  constructor(public fb:FormBuilder,private _authService:AuthmethodService) { }

  ngOnInit() {
    this.buildForm();
  }
 buildForm(){
    this.AuthForm = this.fb.group({
      id:[""],
      name:["",Validators.required],
      description:["",Validators.required]
      
    });
 }
 onSubmit(authmethod:Authmethod,event:Event){
   event.preventDefault();
  
//  this._authService.push.emit(authmethod);
  

  this._authService.addAuthMethod(authmethod);
  }
}
