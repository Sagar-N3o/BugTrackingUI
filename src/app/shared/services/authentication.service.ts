import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _bashURL = "http://localhost:50664/api/user/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  loginForm: FormGroup = this.fb.group({
    "Email": [''],
    "Password": ['']
  });

  Authenticate(data: any) {
    return this._http.post<any>(this._bashURL + 'authenticate', data);
  }
}
