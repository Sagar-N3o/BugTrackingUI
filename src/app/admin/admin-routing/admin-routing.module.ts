import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { AdminBugComponent } from '../components/admin-bug/admin-bug.component';
import { AdminEmployeeComponent } from '../components/admin-employee/admin-employee.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'bug', component: AdminBugComponent },
      { path: 'employee', component: AdminEmployeeComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
