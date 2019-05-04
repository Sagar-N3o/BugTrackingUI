import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TesterRoutingModule } from './tester-routing/tester-routing.module';

import { TesterDashboardComponent } from './components/tester-dashboard/tester-dashboard.component';
import { EmployeeDashboardModule } from '../employee-dashboard/employee-dashboard.module';
import { TesterNavbarComponent } from './components/tester-navbar/tester-navbar.component';
import { TesterSideNavbarComponent } from './components/tester-side-navbar/tester-side-navbar.component';
import { TesterBugListComponent } from './components/tester-bug-list/tester-bug-list.component';
import { TesterBugDetailsComponent } from './components/tester-bug-details/tester-bug-details.component';
import { TesterBugCreateComponent } from './components/tester-bug-create/tester-bug-create.component';
import { TesterProjectListComponent } from './components/tester-project-list/tester-project-list.component';
import { TesterProjectDetailsComponent } from './components/tester-project-details/tester-project-details.component';

@NgModule({
  declarations: [
    TesterDashboardComponent,
    TesterNavbarComponent,
    TesterSideNavbarComponent,
    TesterBugListComponent,
    TesterBugDetailsComponent,
    TesterBugCreateComponent,
    TesterProjectListComponent,
    TesterProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeDashboardModule,
    TesterRoutingModule
  ]
})
export class TesterModule { }
