import { Component, OnInit } from '@angular/core';
import {DataService} from '../myservices/dataservice.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(public ds:DataService) { }

  ngOnInit() {
  }

  onAddProject(projForm){
    console.log(projForm.value);
     this.ds.addProject(projForm.value).subscribe(
       (response)=>{
         console.log(response);
       }
     )
 
}
}
