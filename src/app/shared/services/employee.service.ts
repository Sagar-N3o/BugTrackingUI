import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _bashURL = "http://localhost:50664/api/user";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  employeeForm: FormGroup = this.fb.group({
    'FirstName': [''],
    'LastName': [''],
    'Email': [''],
    'Address': [''],
    'ContectNumber': [''],
    'RoleId': [-1],
    'IsActive': [false],
    'BirthDate': [''],
    'Experience': [0],
    'Password': ['']
  })

  GetAllEmployees() {
    return this._http.get<any>(this._bashURL + '/get-all');
  }
}
