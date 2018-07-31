import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    empUrl="http://localhost:8282/BugTrackingSystem/LoginServlet";
    empUrl1="http://localhost:8282/BugTrackingSystem/EmployeeServlet";
    projUrl="http://localhost:8282/BugTrackingSystem/ProjectServlet";
    constructor(public http: HttpClient){

    }
    public addEmployee(emp){
        return this.http.post(this.empUrl1,JSON.stringify(emp));
    }
    public addProject(proj){
        return this.http.post(this.projUrl,JSON.stringify(proj));
    }
    public login(logind){
        return this.http.post(this.empUrl,JSON.stringify(logind));
    }
}
