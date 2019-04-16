import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any = {};
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
        if(res['Success'])
          this.employee = {
            'bugCount': res['Data'].BugViewModels.length,
            'projectCount': res['Data'].Project_DevelopersViewModel.length,
            'name': res['Data'].FirstName + " " + res['Data'].LastName,
            'email': res['Data'].Email,
            'contectNumber': res['Data'].ContectNumber,
            'experience': res['Data'].Experience,
            'isActive': res['Data'].IsActive,
            'role': res['Data'].User_RolesViewModel.RoleName,
            'address': res['Data'].Address,
            'dob': res['Data'].BirthDate,
            'projects': res['Data'].Project_DevelopersViewModel,
            'bugs': res['Data'].BugViewModels
          };
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
