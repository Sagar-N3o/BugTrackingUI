import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { DashboardService } from './shared/services/dashboard.service';
import { EmployeeService } from './shared/services/employee.service';
import { ProjectService } from './shared/services/project.service';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { BugModule } from './bug/bug.module';
import { BugRoutingModule } from './bug/bug-routing/bug-routing.module';

@NgModule({
  declarations: [
    AppComponent
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
    BugRoutingModule
  ],
  providers: [
    DashboardService,
    EmployeeService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
