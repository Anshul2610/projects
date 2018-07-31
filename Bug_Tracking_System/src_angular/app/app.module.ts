import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DataService } from './myservices/dataservice.service';
import { RouterModule,Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { DeveloperHomeComponent } from './developer-home/developer-home.component';
import { TesterHomeComponent } from './tester-home/tester-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectmembersComponent } from './projectmembers/projectmembers.component';
import { EmpComponent } from './emp/emp.component';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
  {
    path: 'manager-home',
    component: ManagerHomeComponent
  },
  {
    path: 'developer-home',
    component: DeveloperHomeComponent
  },
  {
    path: 'tester-home',
    component: TesterHomeComponent
  },
  {
    path: 'emp',
    component: EmpComponent
  },
  {
    path: 'proj',
    component: ProjectComponent
  }



];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    ManagerHomeComponent,
    DeveloperHomeComponent,
    EmpComponent,
    ProjectComponent,
    TesterHomeComponent,
    ProjectmembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
