import { Component, OnInit, Input } from '@angular/core';
import {Authmethod} from '../authmethod.model';
@Component({
  selector: 'app-authmethod-item',
  templateUrl: './authmethod-item.component.html',
  styleUrls: ['./authmethod-item.component.css']
})
export class AuthmethodItemComponent implements OnInit {
@Input() method:any; 
  constructor() { }

  ngOnInit() {
    
  }

}
