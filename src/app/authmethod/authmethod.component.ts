import { Component, OnInit } from '@angular/core';
import {Authmethod} from './authmethod.model';
import {AuthmethodService} from './authmethod.service';
@Component({
  selector: 'app-authmethod',
  templateUrl: './authmethod.component.html',
  styleUrls: ['./authmethod.component.css'],
  providers:[AuthmethodService]
})
export class AuthmethodComponent implements OnInit {
authMethods: Authmethod[];
  constructor(private authmethodService:AuthmethodService) { }

  ngOnInit() {
    this.authmethodService.getAllAuthMethods().subscribe(authmethods => {
      this.authMethods=authmethods;
      console.log(this.authMethods)});
    
  }

}
