import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fbind } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _bashURL = "http://localhost:50664/api/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  projectForm: FormGroup = this.fb.group({
    'ProjectName': [''],
    'Description': [''],
    'TechnologyId': [''],
    'IsActive': [false],
    'ProjectStatusId': [3]
  });

  GetAllProjects() {
    return this._http.get<any>(this._bashURL + 'project/get-all');
  }

  CreateProject(data: any) {
    return this._http.post<any>(this._bashURL + 'project/create', data);
  }

  GetAllTechnologies() {
    return this._http.get<any>(this._bashURL + 'project/technology/get-all');
  }
}
