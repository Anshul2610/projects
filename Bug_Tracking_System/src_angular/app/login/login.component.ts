import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../myservices/dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentEmp;

  constructor(public route: Router,public ds:DataService) { }

  ngOnInit() {
  }
  onLogin(myform){
    console.log(myform);
  this.ds.login(myform.value).subscribe(
    (response)=> {
      console.log(response);
      this.currentEmp = response;

      if(this.currentEmp.TypeId == 101){
          this.route.navigate(['admin-home']);
      }
      else if(this.currentEmp.TypeId == 102){
          this.route.navigate(['manager-home']);
      }
      else if(this.currentEmp.TypeId == 103){
        this.route.navigate(['developer-home']);
    }
    else if(this.currentEmp.TypeId == 104){
      this.route.navigate(['tester-home']);
    }
    else{
      this.route.navigate(['login']);
    }
    }
  )
}
}