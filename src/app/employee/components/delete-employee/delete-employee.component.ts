import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
  }

  NotConfirmedDeletion() {
    this._router.navigate(['admin/employee']);
  }

  ConfirmedDeletion() {
    this._employeeService.DeleteEmployee(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/employee'])
        else  
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/employee']);
  }
}
