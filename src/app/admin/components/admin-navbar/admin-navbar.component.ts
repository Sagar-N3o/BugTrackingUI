import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  employeeId: number = 0;

  constructor() { }

  ngOnInit() {
    this.employeeId = Number.parseInt(sessionStorage.getItem('employee_id'));
  }

}
