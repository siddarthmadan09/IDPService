import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],

})
export class UserDeleteComponent implements OnInit {
@Input() pk: any;
  

  
  constructor(private userService:UserService) { }

  ngOnInit() {

  }
  deleteUser(){
   
  this.userService.deleteUser(this.pk).subscribe(response=>console.log(response));
     this.userService.delete.next(this.pk);
   
  
  }

}
