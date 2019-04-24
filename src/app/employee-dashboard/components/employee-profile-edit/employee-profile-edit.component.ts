import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-profile-edit',
  templateUrl: './employee-profile-edit.component.html',
  styleUrls: ['./employee-profile-edit.component.css']
})
export class EmployeeProfileEditComponent implements OnInit {

  hasError: boolean = false;
  Id: number = 0;
  employee: any = {};

  constructor(
    private _router: Router,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(sessionStorage.getItem('employee_id'));
    this._employeeService.EmployeeDetails(this.Id).subscribe(
      res => {
        if (res['Success']) {
          this.employee = res['Data'];
          this.LoadFormData();
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  LoadFormData() {
    this._employeeService.employeeForm.get('FirstName').setValue(this.employee.FirstName);
    this._employeeService.employeeForm.get('LastName').setValue(this.employee.LastName);
    this._employeeService.employeeForm.get('Email').setValue(this.employee.Email);
    this._employeeService.employeeForm.get('Address').setValue(this.employee.Address);
    this._employeeService.employeeForm.get('ContectNumber').setValue(this.employee.ContectNumber);
    this._employeeService.employeeForm.get('RoleId').setValue(this.employee.RoleId);
    this._employeeService.employeeForm.get('IsActive').setValue(this.employee.IsActive);
    this._employeeService.employeeForm.get('BirthDate').setValue(this.employee.BirthDate);
    this._employeeService.employeeForm.get('Experience').setValue(this.employee.Experience);
    this._employeeService.employeeForm.get('Password').setValue(this.employee.Password);
  }

  GoBack() {
    if (sessionStorage.getItem('role') == 'Employee')
      this._router.navigate(['/employee/profile']);
    if (sessionStorage.getItem('role') == 'Tester')
      this._router.navigate(['/tester/profile']);
  }

  OnSubmit() {
    this._employeeService.UpdateEmployee(this._employeeService.employeeForm.value)
      .subscribe(
        res => {
          this._employeeService.employeeForm.reset();
          if (sessionStorage.getItem('role') == 'Employee')
            this._router.navigate(['/employee/profile']);
          if (sessionStorage.getItem('role') == 'Tester')
            this._router.navigate(['/tester/profile']);
        },
        err => {
          this.hasError = true;
        }
      );
  }
}