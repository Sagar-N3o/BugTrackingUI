import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesterDashboardComponent } from '../components/tester-dashboard/tester-dashboard.component';

const routes: Routes = [
  // {
  //   path: 'tester', component: TesterDashboardComponent, children: [
  //     { path: '', redirectTo: 'profile', pathMatch: 'full' },
  //     {  }
  //   ]
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesterRoutingModule { }
