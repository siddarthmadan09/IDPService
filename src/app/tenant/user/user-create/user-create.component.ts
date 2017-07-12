import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder,FormControl,Validators, } from '@angular/forms';
import {UserService} from '../user.service';
import {UsergroupService} from '../../usergroup/usergroup.service';
import {UserGroup} from '../../usergroup/usergroup';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
tenantId:String;
usergroups:UserGroup;

UserForm: FormGroup;
user:User;
usergroupList=[];


  constructor(private fb:FormBuilder,private _userService:UserService,private usergroupService:UsergroupService) { }

  ngOnInit() {
  this.buildForm();
  this.tenantId = sessionStorage.getItem('id');
   this.usergroupService.getUsergroups(this.tenantId).subscribe(usergroups=>{
     this.usergroups=usergroups;
     console.log(this.usergroups)});
  
 console.log()
  
  }
buildForm(){
  this.UserForm = this.fb.group({
    username:["",Validators.required],
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    phoneNumber:["",Validators.required],
    userGroupIds:[""],
    emailAddress:["",Validators.required]
    
   });
 }
  onSubmit(user:User,event:Event){
   event.preventDefault();
  console.log("cam ehre");
 let usergroupIdList=[];
    console.log(this.usergroupList);
    for (let key in this.usergroupList) {
      usergroupIdList.push(key);
    }
    user.userGroupIds= usergroupIdList;
  console.log(user);
  document.getElementById('closeModalButton').click();
  this._userService.add.next(user);
  this._userService.addUser(user).subscribe(response=>console.log(response));
  this.UserForm.reset();
  var checkboxes = document.getElementsByTagName('input');

for (var i=0; i<checkboxes.length; i++)  {
  if (checkboxes[i].type == 'checkbox')   {
    checkboxes[i].checked = false;
  }
}
  }
userCreateClicked(){

}
}
