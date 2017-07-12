import { Component, OnInit, Input } from '@angular/core';
import {AuthMethodConfig} from '../authmethodconfig.model';
@Component({
  selector: 'app-authmethodconfig-item',
  templateUrl: './authmethodconfig-item.component.html',
  styleUrls: ['./authmethodconfig-item.component.css']
})
export class AuthmethodconfigItemComponent implements OnInit {
@Input() authmethodconfig:AuthMethodConfig;
public customClass: string = 'customClass';
  public isFirstOpen: boolean = true;
  constructor() { }

  ngOnInit() {
    
  }

}
