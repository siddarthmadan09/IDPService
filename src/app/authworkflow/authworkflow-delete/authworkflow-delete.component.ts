import { Component, OnInit,Input } from '@angular/core';
import { AuthworkflowService } from "../authworkflow.service";

@Component({
  selector: 'app-authworkflow-delete',
  templateUrl: './authworkflow-delete.component.html',
  styleUrls: ['./authworkflow-delete.component.css']
})
export class AuthworkflowDeleteComponent implements OnInit {
@Input() del: any;
@Input() lg: boolean = false;
  constructor(private authworkflowService:AuthworkflowService) { }

  ngOnInit() {
  }
  deleteAuthworkflow(id:string){
    this.authworkflowService.deleteAuthWorkFlow(id).subscribe(Response=>console.log(Response));
  }
}
