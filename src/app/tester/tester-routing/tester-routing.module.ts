import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesterDashboardComponent } from '../components/tester-dashboard/tester-dashboard.component';
import { EmployeePersonalDetailsComponent } from 'src/app/employee-dashboard/components/employee-personal-details/employee-personal-details.component';
import { TesterBugListComponent } from '../components/tester-bug-list/tester-bug-list.component';
import { TesterProjectListComponent } from '../components/tester-project-list/tester-project-list.component';

const routes: Routes = [
  {
    path: 'tester', component: TesterDashboardComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'bug', component: TesterBugListComponent },
      { path: 'project', component: TesterProjectListComponent },
      { path: 'profile', component: EmployeePersonalDetailsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesterRoutingModule { }
