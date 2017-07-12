import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
declare var $:JQueryStatic;
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
	
@Input() user:User={
	id:'',
	username:'',
	emailAddress:'',
	firstName:'',
	lastName : '',
	phoneNumber:'',
	userGroups:[],
	userGroupIds:[]
}
UserForm:FormGroup;
@Input() pk: any;
  @Input() lg: boolean = false;
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private userService:UserService) { }

 ngOnInit() {this.buildForm();}
 buildForm() {
 console.log(this.user);
this.UserForm = this.fb.group({
	id:[this.user.id,Validators.required],
	username:[this.user.username,Validators.required],
	emailAddress:[this.user.emailAddress,Validators.required],
	firstName:[this.user.firstName,Validators.required],
	lastName:[this.user.lastName,Validators.required],
	phoneNumber:[this.user.phoneNumber,Validators.required],
	userGroups:[this.user.userGroups],
	userGroupIds:[this.user.userGroupIds]
	 });
 }
update(newUser, event:Event){
	event.preventDefault();
this.userService.update.next(newUser);
	this.userService.updateUser(newUser).subscribe(response=>console.log(response));
	 document.getElementById('closeModalButton').click();

}
/*closeModalOnCancel(){
	$('.editUserModal').modal('hide');
	this.modalCloseOnCancel.emit("modalCloseOnCancel");
}*/
}
