import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { EmployeeComponent } from '../components/employee/employee.component';

const routes: Routes = [
  {
    path: 'admin/employee', component: EmployeeComponent, children: [
      { path: '', component: ListEmployeeComponent },
      { path: 'create', component: CreateEmployeeComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
