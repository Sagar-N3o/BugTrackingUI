import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  hasError: boolean = false;
  Id: number = 0;
  employee: any = {};

  constructor(
    private _router: Router,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(sessionStorage.getItem("employee_id"));
    this._employeeService.EmployeeDetails(this.Id).subscribe(
      res => {
        if(res['Success'])
          this.employee = {
            'name': res['Data'].FirstName + " " + res['Data'].LastName,
            'email': res['Data'].Email,
            'address': res['Data'].Address,
            'contectNumber': res['Data'].ContectNumber,
            'role': res['Data'].User_RolesViewModel.RoleName,
            'isActive': res['Data'].IsActive,
            'dob': res['Data'].BirthDate,
            'experience': res['Data'].Experience,
            'bugCount': res['Data'].BugViewModels.length,
            'projects': res['Data'].Project_DevelopersViewModel,
            'bugs': res['Data'].BugViewModels
          };
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  EditProfile() {
    this._router.navigate(['employee/profile/edit']);
  }
}
