import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from '../components/employee-dashboard/employee-dashboard.component';
import { EmployeeDashboardDesignComponent } from '../components/employee-dashboard-design/employee-dashboard-design.component';
import { EmployeeListBugComponent } from '../components/employee-list-bug/employee-list-bug.component';
import { EmployeeCurrentProjectComponent } from '../components/employee-current-project/employee-current-project.component';
import { EmployeeProfileComponent } from '../components/employee-profile/employee-profile.component';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeDashboardDesignComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: EmployeeDashboardComponent },
      { path: 'bug', component: EmployeeListBugComponent },
      { path: 'project', component: EmployeeCurrentProjectComponent },
      { path: 'profile', component: EmployeeProfileComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
