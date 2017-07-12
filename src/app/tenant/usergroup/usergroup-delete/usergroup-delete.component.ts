import { Component, OnInit, Input } from '@angular/core';
import { UsergroupService } from "../usergroup.service";

@Component({
  selector: 'app-usergroup-delete',
  templateUrl: './usergroup-delete.component.html',
  styleUrls: ['./usergroup-delete.component.css']
})
export class UsergroupDeleteComponent implements OnInit {
@Input() id:string;
  constructor(private userGroupService : UsergroupService) { }

  ngOnInit() {
  }
 deleteUserGroup(){
   this.userGroupService.deleteUsergroup(this.id).subscribe(response=>console.log(response));
    // this.userGroupService.delete.next(this.pk);
 }
}
