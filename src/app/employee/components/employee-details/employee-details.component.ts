import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee = {};
  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
    this._employeeService.EmployeeDetails(this.Id).subscribe(
      res => {
        if(res['Success']) {
          console.log(res['Data']);
          this.employee = res['Data'];
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

}
