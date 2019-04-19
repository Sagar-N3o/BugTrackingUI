import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing/employee-dashboard-routing.module';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeDashboardDesignComponent } from './components/employee-dashboard-design/employee-dashboard-design.component';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeSideNavbarComponent } from './components/employee-side-navbar/employee-side-navbar.component';
import { EmployeeListBugComponent } from './components/employee-list-bug/employee-list-bug.component';
import { EmployeeCurrentProjectComponent } from './components/employee-current-project/employee-current-project.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './components/employee-profile-edit/employee-profile-edit.component';
import { EmployeeChangePasswordComponent } from './components/employee-change-password/employee-change-password.component';
import { EmployeeBugDetailsComponent } from './components/employee-bug-details/employee-bug-details.component';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeDashboardDesignComponent,
    EmployeeNavbarComponent,
    EmployeeSideNavbarComponent,
    EmployeeListBugComponent,
    EmployeeCurrentProjectComponent,
    EmployeeProfileComponent,
    EmployeeProfileEditComponent,
    EmployeeChangePasswordComponent,
    EmployeeBugDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeDashboardRoutingModule
  ]
})
export class EmployeeDashboardModule { }
