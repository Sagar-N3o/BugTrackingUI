import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.css']
})
export class DeleteRoleComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
  }

  NotConfirmedDeletion() {
    this._router.navigate(['admin/employee/roles']);
  }

  ConfirmedDeletion() {
    this._employeeService.DeleteRole(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/employee/roles'])
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
