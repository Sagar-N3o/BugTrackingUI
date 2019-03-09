import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListEmployeeComponent,
    CreateEmployeeComponent
  ]
})
export class EmployeeModule { }
