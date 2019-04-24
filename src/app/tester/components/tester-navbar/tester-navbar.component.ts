import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester-navbar',
  templateUrl: './tester-navbar.component.html',
  styleUrls: ['./tester-navbar.component.css']
})
export class TesterNavbarComponent implements OnInit {

  employeeId: number = 0;

  constructor() { }

  ngOnInit() {
    this.employeeId = Number.parseInt(sessionStorage.getItem('employee_id'));
  }

}
