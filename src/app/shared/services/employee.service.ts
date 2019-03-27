import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _bashURL = "http://localhost:50664/api/";

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
    'IsActive': [true],
    'BirthDate': [''],
    'Experience': [0],
    'Password': ['']
  })

  GetAllEmployees() {
    return this._http.get<any>(this._bashURL + 'user/get-all');
  }

  GetRoles() {
    return this._http.get<any>(this._bashURL + 'role/get-all');
  }

  CreateEmployee(data: any) {
    return this._http.post<any>(this._bashURL + 'user/create', data);
  }

  DeleteEmployee(id: number) {
    return this._http.delete<any>(this._bashURL + 'user/delete/' + id);
  }
}
