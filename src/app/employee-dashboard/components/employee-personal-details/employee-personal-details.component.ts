import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-personal-details',
  templateUrl: './employee-personal-details.component.html',
  styleUrls: ['./employee-personal-details.component.css']
})
export class EmployeePersonalDetailsComponent implements OnInit {

  hasError: boolean = false;
  Id: number = 0;
  employee: any = {};
  role: string = "";

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.Id = Number.parseInt(sessionStorage.getItem("employee_id"));
    this._employeeService.EmployeeDetails(this.Id).subscribe(
      res => {
        if (res['Success'])
          this.employee = {
            'name': res['Data'].FirstName + " " + res['Data'].LastName,
            'email': res['Data'].Email,
            'address': res['Data'].Address,
            'contectNumber': res['Data'].ContectNumber,
            'role': res['Data'].User_RolesViewModel.RoleName,
            'dob': res['Data'].BirthDate,
            'experience': res['Data'].Experience
          };
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  EditProfile() {
    if (sessionStorage.getItem('role') == 'Employee')
      this._router.navigate(['/employee/profile/edit']);
    if (sessionStorage.getItem('role') == 'Tester')
      this._router.navigate(['/tester/profile/edit']);
  }

}
