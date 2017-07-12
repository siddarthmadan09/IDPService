import { Component, OnInit,Input } from '@angular/core';
import { UserGroup} from '../usergroup';
declare var $:JQueryStatic;
@Component({
  selector: 'app-usergroup-item',
  templateUrl: './usergroup-item.component.html',
  styleUrls: ['./usergroup-item.component.css']
})
export class UsergroupItemComponent implements OnInit {
@Input() UserGroup:UserGroup;
editUsergroupClicked:boolean=false;
deleteUsergroupClicked:boolean=false;
  constructor() {}

  ngOnInit() {
 
  }
usergroupEditModalClicked(){
 this.editUsergroupClicked=true;
  setTimeout(function(){
$('.editUsergroupModal').modal('show'); 
},10);
}
}
