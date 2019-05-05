import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _bashURL = "http://localhost:50664/api/project/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  // Project Form
  projectForm: FormGroup = this.fb.group({
    'ProjectName': [''],
    'Description': [''],
    'TechnologyId': [''],
    'IsActive': [true],
    'ProjectStatusId': ['3']
  });

  // Technology Form
  technologyForm: FormGroup = this.fb.group({
    'Name': [''],
    'Description': ['']    
  });

  //Status Form
  statusForm: FormGroup = this.fb.group({
    'ProjectStatus': ['']
  });


  // Project
  GetAllProjects() {
    return this._http.get<any>(this._bashURL + 'get-all');
  }

  GetFinished() {
    return this._http.get<any>(this._bashURL + 'get-finished');
  }

  ProjectDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'get/' + id)
  }

  ProjectDetailsByUserId(id: number) {
    return this._http.get<any>('http://localhost:50664/api/project/developers/get-by-user/' + id);
  }

  CreateProject(data: any) {
    return this._http.post<any>(this._bashURL + 'create', data);
  }

  ChangeStatus(data: any) {
    return this._http.post<any>(this._bashURL + 'change-status', data);
  }

  DeleteProject(id: number) {
    return this._http.delete<any>(this._bashURL + 'delete/' + id);
  }

  UpdateProject(id: any, data: any) {
    data.Id = id;
    return this._http.put<any>(this._bashURL + 'update', data);
  }


  // Developers
  GetAllDevelopers(id: number) {
    return this._http.get<any>(this._bashURL + 'developers/get/' + id);
  }

  AddDevelopers(data: any) {
    return this._http.post<any>(this._bashURL + 'developers/add', data);
  }

  RemoveDeveloper(projId: number, devId: number) {
    return this._http.delete<any>(this._bashURL + 'developers/remove/' + projId + '/' + devId);
  }


  // Technologies
  GetAllTechnologies() {
    return this._http.get<any>(this._bashURL + 'technology/get-all');
  }

  TechnologyDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'technology/get/' + id);
  }

  CreateTechnology(data: any) {
    return this._http.post<any>(this._bashURL + 'technology/create', data);
  }

  DeleteTechnology(id: number) {
    return this._http.delete<any>(this._bashURL + 'technology/delete/' + id);
  }

  
  //Status
  GetAllStatus() {
    return this._http.get<any>(this._bashURL + 'status/get-all');
  }

  StatusDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'status/get/' + id);
  }

  CreateStatus(data: any) {
    return this._http.post<any>(this._bashURL + 'status/create', data);
  }

  DeleteStatus(id: number) {
    return this._http.delete<any>(this._bashURL + 'status/delete/' + id);
  }
}
