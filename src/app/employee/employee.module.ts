import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

@NgModule({
  declarations: [
    ListEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListEmployeeComponent
  ]
})
export class EmployeeModule { }
