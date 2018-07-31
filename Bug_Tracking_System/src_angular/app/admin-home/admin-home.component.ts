import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
   
  
  onregemp(){
    this.route.navigate(['emp']);
  }

  onregproj(){
    this.route.navigate(['proj']);
  }
}
