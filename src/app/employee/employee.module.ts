import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from '../shared/shared.module';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { RolesComponent } from './components/roles/roles.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { DeleteRoleComponent } from './components/delete-role/delete-role.component';
import { UpdateRoleComponent } from './components/update-role/update-role.component';

@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    RolesComponent,
    CreateRoleComponent,
    DeleteRoleComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  exports: [
    ListEmployeeComponent,
    CreateEmployeeComponent
  ]
})
export class EmployeeModule { }
