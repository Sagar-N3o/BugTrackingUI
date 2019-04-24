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
    sessionStorage.removeItem('employee_id');
  }

  OnSubmit() {
    this._authenticationService.Authenticate(this._authenticationService.loginForm.value).subscribe(
      res => {
        if(res['Success']){
          sessionStorage.setItem('employee_id', res['Data'].Id);
          sessionStorage.setItem('role', res['Data'].User_RolesViewModel.RoleName)

          let role = res['Data'].User_RolesViewModel.RoleName;
          if(role == 'Admin')
            this._router.navigate(['admin']);
          else if(role == 'Employee')
            this._router.navigate(['employee']);
          else
            this._router.navigate(['tester']);
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

}
