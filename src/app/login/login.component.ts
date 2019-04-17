import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  OnSubmit() {
    this._authenticationService.Authenticate(this._authenticationService.loginForm.value).subscribe(
      res => {
        if(res['Success']){
          sessionStorage.setItem('employee_id', res['Data']);
          this._router.navigate(['employee']);
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

}
