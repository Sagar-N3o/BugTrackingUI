import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { BugModule } from './bug/bug.module';
import { EmployeeDashboardModule } from './employee-dashboard/employee-dashboard.module';

import { DashboardService } from './shared/services/dashboard.service';
import { EmployeeService } from './shared/services/employee.service';
import { ProjectService } from './shared/services/project.service';
import { AuthenticationService } from './shared/services/authentication.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TesterModule } from './tester/tester.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    ProjectModule,
    EmployeeModule,
    BugModule,
    EmployeeDashboardModule,
    TesterModule
  ],
  providers: [
    DashboardService,
    EmployeeService,
    ProjectService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
