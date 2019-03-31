import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fbind } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _bashURL = "http://localhost:50664/api/project/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  projectForm: FormGroup = this.fb.group({
    'ProjectName': [''],
    'Description': [''],
    'TechnologyId': [''],
    'IsActive': [false],
    'ProjectStatusId': ['3']
  });

  GetAllProjects() {
    return this._http.get<any>(this._bashURL + 'get-all');
  }

  ProjectDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'get/' + id)
  }

  CreateProject(data: any) {
    // console.log(data);
    return this._http.post<any>(this._bashURL + 'create', data);
  }

  DeleteProject(id: number) {
    return this._http.delete<any>(this._bashURL + 'delete/' + id);
  }

  UpdateProject(id: any, data: any) {
    data.Id = id;
    return this._http.put<any>(this._bashURL + 'update', data);
  }

  GetAllTechnologies() {
    return this._http.get<any>(this._bashURL + 'technology/get-all');
  }

  GetAllStatus() {
    return this._http.get<any>(this._bashURL + 'status/get-all');
  }
}
