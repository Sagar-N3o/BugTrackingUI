import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _bashURL = "http://localhost:50664/api/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  GetAllProjects() {
    return this._http.get<any>(this._bashURL + 'project/get-all');
  }
}
