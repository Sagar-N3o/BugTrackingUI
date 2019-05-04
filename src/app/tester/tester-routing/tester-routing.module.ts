import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TesterDashboardComponent } from '../components/tester-dashboard/tester-dashboard.component';
import { EmployeePersonalDetailsComponent } from 'src/app/employee-dashboard/components/employee-personal-details/employee-personal-details.component';
import { TesterBugListComponent } from '../components/tester-bug-list/tester-bug-list.component';
import { EmployeeProfileEditComponent } from 'src/app/employee-dashboard/components/employee-profile-edit/employee-profile-edit.component';
import { EmployeeChangePasswordComponent } from 'src/app/employee-dashboard/components/employee-change-password/employee-change-password.component';
import { TesterBugDetailsComponent } from '../components/tester-bug-details/tester-bug-details.component';
import { TesterBugCreateComponent } from '../components/tester-bug-create/tester-bug-create.component';
import { TesterProjectListComponent } from '../components/tester-project-list/tester-project-list.component';
import { TesterProjectDetailsComponent } from '../components/tester-project-details/tester-project-details.component';

const routes: Routes = [
  {
    path: 'tester', component: TesterDashboardComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'bug', children: [
          { path: '', component: TesterBugListComponent },
          { path: 'details/:id', component: TesterBugDetailsComponent },
          { path: 'create', component: TesterBugCreateComponent }
        ]
      },
      {
        path: 'project', children: [
          { path: '', component: TesterProjectListComponent },
          { path: 'details/:id', component: TesterProjectDetailsComponent }
        ]
      },
      {
        path: 'profile', children: [
          { path: '', component: EmployeePersonalDetailsComponent },
          { path: 'edit', component: EmployeeProfileEditComponent },
          { path: 'change-password', component: EmployeeChangePasswordComponent }
        ]
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesterRoutingModule { }
