import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  hasError: boolean = false;
  Id: number = 0;
  roles = [];
  employee: any = {};

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._employeeService.GetRoles().subscribe(
      data => {
        if(data['Success'])
          this.roles = data['Data'];
        else {
          this.hasError = true;
          this._router.navigate(['admin/employee']);
        }
      },
      err => this.hasError = true
    );

    this.LoadData();
  }

  LoadData() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
    this._employeeService.EmployeeDetails(this.Id).subscribe(
      res => {
        if(res['Success']) {
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

  OnSubmit() {
    this._employeeService.UpdateEmployee(this._employeeService.employeeForm.value, this.employee)
      .subscribe(
        res => {
          this._employeeService.employeeForm.reset();
          this._router.navigate(['/admin/employee']);
        },
        err => {
          this.hasError = true;
        }
      );
  }
}
