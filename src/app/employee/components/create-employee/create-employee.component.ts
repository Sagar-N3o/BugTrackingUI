import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  OnSubmit() {

    this._employeeService.CreateEmployee(this._employeeService.employeeForm.value).subscribe(
      res => {
        this._router.navigate(['/admin/employee']);
      },
      err => {
        this.hasError = true;
      }
    );
    // this.LogKeyValuePair(this._employeeService.employeeForm);
  }

  LogKeyValuePair(form: FormGroup) {
    Object.keys(form.controls).forEach( (key: string) => {

      const abstractControl = form.get(key);

      if(abstractControl instanceof FormGroup) {
        this.LogKeyValuePair(abstractControl);
      } else {
        console.log("Key: " + key + " | Value: " + abstractControl.value);
      }
    });
  }

  LoadData() {
    this._employeeService.employeeForm.get('FirstName').setValue('Sagar');
    this._employeeService.employeeForm.get('LastName').setValue('Agola');
    this._employeeService.employeeForm.get('Email').setValue('n3o735@gmail.com');
    this._employeeService.employeeForm.get('Address').setValue('221B, Backer Street');
    this._employeeService.employeeForm.get('ContectNumber').setValue('735196488');
    this._employeeService.employeeForm.get('RoleId').setValue('Admin');
    this._employeeService.employeeForm.get('IsActive').setValue(true);
    this._employeeService.employeeForm.get('BirthDate').setValue('1999-06-24');
    this._employeeService.employeeForm.get('Experience').setValue(5);
    this._employeeService.employeeForm.get('Password').setValue('pwd123');
  }

}
