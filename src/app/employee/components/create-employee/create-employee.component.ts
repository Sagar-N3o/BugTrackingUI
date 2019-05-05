import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  hasError: boolean = false;
  roles: any = [];

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._employeeService.GetRoles().subscribe(
      data => {
        if(data['Success'])
          this.roles = data['Data'];
        else {
          this.hasError = true;
          this._router.navigate(['admin/employee']);
        }
      },
      err => this.hasError = true
    );
  }

  OnSubmit() {
    this._employeeService.CreateEmployee(this._employeeService.employeeForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._employeeService.employeeForm.reset();
          this._router.navigate(['/admin/employee']);  
        }
        else  
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/employee'])
  }
}
