import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-permissions-item',
  templateUrl: './permissions-item.component.html',
  styleUrls: ['./permissions-item.component.css']
})
export class PermissionsItemComponent implements OnInit {
@Input() permission;
  constructor() { }

  ngOnInit() {
  }

}
