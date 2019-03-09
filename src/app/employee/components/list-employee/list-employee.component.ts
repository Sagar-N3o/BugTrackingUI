import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees = []

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this._employeeService.GetAllEmployees()
      .subscribe(
        data => {
          if(data['Success']) {
            this.employees = data['Data'];
            console.log(this.employees);
          }
          else
            console.log("Error");
        },
        err => console.log(err['message'])
      );
  }

  CreateNewEmployee() {
    
  }
}
