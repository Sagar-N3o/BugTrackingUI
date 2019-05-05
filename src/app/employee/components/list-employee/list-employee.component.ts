import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: any = [];
  testers: any = [];
  error: boolean = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._employeeService.GetAllEmployees()
      .subscribe(
        data => {
          if (data['Success']) {
            this.employees = data['Data'].filter(this.IsEmployee);
            this.testers = data['Data'].filter(this.IsTester);
          }
          else 
            this.error = true;
        },
        err => this.error = true
      );
  }
  
  IsEmployee(element) { 
    return (element.User_RolesViewModel.RoleName == 'Employee'); 
  }

  IsTester(element) {
    return (element.User_RolesViewModel.RoleName == 'Tester');
  }

  CreateNewEmployee() {
    this._router.navigate(['admin/employee/create']);
  }

  DeleteEmployee(id: number) {
    this._router.navigate(['admin/employee/delete', id]);
  }

  EmployeeDetails(id: number) {
    this._router.navigate(['admin/employee/details', id]);
  }
}
