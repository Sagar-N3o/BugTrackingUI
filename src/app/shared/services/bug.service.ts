import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private _bashURL = "http://localhost:50664/api/bug/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  // Bug Status Form
  StatusForm: FormGroup = this.fb.group({
    'BugStatus': ['']
  });

  //Bug Priority Form
  PriorityForm: FormGroup = this.fb.group({
    'BugPriority': ['']
  });

  // Bug
  GetAllBugs() {
    return this._http.get<any>(this._bashURL + 'get-all');
  }

  BugDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'get/' + id);
  }

  DeleteBug(id: number) {
    return this._http.delete<any>(this._bashURL + 'delete/' + id);
  }

  // Bug Status
  GetAllBugStatus() {
    return this._http.get<any>(this._bashURL + 'status/get-all');
  }

  StatusDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'status/get/' + id);
  }

  CreateBugStatus(data: any) {
    return this._http.post<any>(this._bashURL + 'status/create', data);
  }

  DeleteBugStatus(id: number) {
    return this._http.delete<any>(this._bashURL + 'status/delete/' + id);
  }

  // Bug Priority
  GetAllBugPriority() {
    return this._http.get<any>(this._bashURL + 'priority/get-all');
  }

  PriorityDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'priority/get/' + id);
  }

  CreateBugPriority(data: any) {
    return this._http.post<any>(this._bashURL + 'priority/create', data);
  }

  DeleteBugPriority(id: number) {
    return this._http.delete<any>(this._bashURL + 'priority/delete/' + id);
  }
}