import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router    
  ) { }

  ngOnInit() {
  }

  OnSubmit() {
    this._employeeService.CreateRole(this._employeeService.roleForm.value).subscribe(
      res => {
        this._employeeService.roleForm.reset();
        this._router.navigate(['admin/employee/roles']);
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/employee/roles']);
  }
}
