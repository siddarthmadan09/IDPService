import { Component, OnInit,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
@Input() element: {name : string,desc : string};
@Input() name: string;
  constructor() { }

  ngOnInit() {
  console.log("ng on init");
  }
  ngOnChanges(changes:SimpleChanges){
 	
  }


}
