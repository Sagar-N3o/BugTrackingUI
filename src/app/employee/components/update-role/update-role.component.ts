import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  hasError: boolean = false;
  Id: number = 0;
  role: any = {};

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
    this._employeeService.GetRole(this.Id).subscribe(
      res => {
        if(res['Success']) {
          this.role = res['Data'];
          this.LoadFormData();
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  LoadFormData() {
    this._employeeService.roleForm.get('RoleName').setValue(this.role.RoleName);
  }

  OnSubmit() {
    this._employeeService.UpdateRole(this.Id, this._employeeService.roleForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._employeeService.roleForm.reset();
          this._router.navigate(['admin/employee/roles']);
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/employee/roles']);
  }
}
