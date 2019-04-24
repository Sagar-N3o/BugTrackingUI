import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TesterRoutingModule } from './tester-routing/tester-routing.module';

import { TesterDashboardComponent } from './components/tester-dashboard/tester-dashboard.component';
import { EmployeeDashboardModule } from '../employee-dashboard/employee-dashboard.module';
import { TesterNavbarComponent } from './components/tester-navbar/tester-navbar.component';
import { TesterSideNavbarComponent } from './components/tester-side-navbar/tester-side-navbar.component';
import { TesterBugListComponent } from './components/tester-bug-list/tester-bug-list.component';
import { TesterProjectListComponent } from './components/tester-project-list/tester-project-list.component';

@NgModule({
  declarations: [
    TesterDashboardComponent,
    TesterNavbarComponent,
    TesterSideNavbarComponent,
    TesterBugListComponent,
    TesterProjectListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeDashboardModule,
    TesterRoutingModule
  ]
})
export class TesterModule { }
