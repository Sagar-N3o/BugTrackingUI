import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  });

  changePasswordForm: FormGroup = this.fb.group({
    'OldPassword': [''],
    'NewPassword': ['']
  });

  roleForm: FormGroup = this.fb.group({
    'RoleName': ['']
  });

  GetAllEmployees() {
    return this._http.get<any>(this._bashURL + 'user/get-all');
  }

  getFreeEmployees() {
    return this._http.get<any>(this._bashURL + 'user/get-free');
  }

  CreateEmployee(data: any) {
    return this._http.post<any>(this._bashURL + 'user/create', data);
  }

  DeleteEmployee(id: number) {
    return this._http.delete<any>(this._bashURL + 'user/delete/' + id);
  }

  EmployeeDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'user/get/' + id);
  }

  UpdateEmployee(data: any) {
    data.Id = Number.parseInt(sessionStorage.getItem('employee_id'));
    return this._http.put<any>(this._bashURL + 'user/update', data);
  }

  ChangePassword(data: any) {
    data.Id = Number.parseInt(sessionStorage.getItem('employee_id'));
    return this._http.post<any>(this._bashURL + 'user/change-password', data);
  }

  CreateRole(data: any) {
    return this._http.post<any>(this._bashURL + 'role/create', data);
  }

  GetRoles() {
    return this._http.get<any>(this._bashURL + 'role/get-all');
  }

  GetRole(id: number) {
    return this._http.get<any>(this._bashURL + 'role/get/' + id);
  }

  UpdateRole(id: number, data: any) {
    data.Id = id;
    return this._http.put(this._bashURL + 'role/edit', data);
  }

  DeleteRole(id: number) {
    return this._http.delete(this._bashURL + 'role/delete/' + id);
  }
}
