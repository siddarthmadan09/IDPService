import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user'
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
@Input() users:User;
@Output() userId:EventEmitter<any>=new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit() {
  }
showUser(id){
  console.log(id);
this.userId.emit(id);
}
}
