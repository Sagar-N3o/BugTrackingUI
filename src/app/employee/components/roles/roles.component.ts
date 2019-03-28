import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles = [];
  hasError: boolean = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._employeeService.GetRoles().subscribe(
      res => {
        if(res['Success'])
          this.roles = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  UpdateRole(id: number) {
    this._router.navigate(['admin/employee/roles/update', id]);
  }

  DeleteRole(id: number) {
    this._router.navigate(['admin/employee/roles/delete', id]);
  }
}
