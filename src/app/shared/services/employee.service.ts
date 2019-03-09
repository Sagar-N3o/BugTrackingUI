import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _bashURL = "http://localhost:50664/api/user";

  constructor(
    private _http: HttpClient
  ) { }

  GetAllEmployees() {
    return this._http.get<any>(this._bashURL + '/get-all');
  }
}
