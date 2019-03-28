import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { DeleteEmployeeComponent } from '../components/delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from '../components/employee-details/employee-details.component';
import { RolesComponent } from '../components/roles/roles.component';
import { CreateRoleComponent } from '../components/create-role/create-role.component';
import { DeleteRoleComponent } from '../components/delete-role/delete-role.component';
import { UpdateRoleComponent } from '../components/update-role/update-role.component';

const routes: Routes = [
  {
    path: 'admin/employee', component: EmployeeComponent, children: [
      { path: '', component: ListEmployeeComponent },
      { path: 'create', component: CreateEmployeeComponent },
      { path: 'delete/:id', component: DeleteEmployeeComponent },
      { path: 'details/:id', component: EmployeeDetailsComponent },
      { 
        path: 'roles', children: [
          { path: '', component: RolesComponent },
          { path: 'create', component: CreateRoleComponent },
          { path: 'delete/:id', component: DeleteRoleComponent },
          { path: 'update/:id', component: UpdateRoleComponent }
        ] 
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
