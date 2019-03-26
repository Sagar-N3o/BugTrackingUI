import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeComponent
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
