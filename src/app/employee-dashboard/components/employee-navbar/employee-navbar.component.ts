import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent implements OnInit {

  employeeId: number = 0;

  constructor() { }

  ngOnInit() {
    this.employeeId = Number.parseInt(sessionStorage.getItem('employee_id'));
  }

}
