import { Component, OnInit } from '@angular/core';
import { DataService } from '../myservices/dataservice.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(public ds:DataService) { }

  ngOnInit() {
  }

  onAddEmployee(empForm){
   console.log(empForm.value);
    this.ds.addEmployee(empForm.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )

  }
}
