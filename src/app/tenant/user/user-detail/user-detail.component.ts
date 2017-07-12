import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user';
declare var $:JQueryStatic;
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  userEditClicked:Boolean=false;
  userDeleteClicked:boolean=false;
user:User;
userSelected:boolean=false;
@Input() uid:String;
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  console.log(this.uid);
if(this.uid!== undefined){
  this.userService.getUser(this.uid).subscribe(user=>{
  this.user=user;
  this.userService.update.subscribe(user=>this.user=user);
 this.userService.delete.subscribe(id=>this.router.navigate(['tenant']));
    this.userSelected=true;
  });
}
 

}
editUserClicked(){
  console.log("edit user clicked");
this.userEditClicked=true;
setTimeout(function(){
$('.editUserModal').modal('show'); 
},10);
}
deleteUserClicked(){
  this.userDeleteClicked=true;
setTimeout(function(){
$('.deleteUserModal').modal('show'); 
},10);
}

}
