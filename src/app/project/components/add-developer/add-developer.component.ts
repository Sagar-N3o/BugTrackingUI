import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {

  projId: number = 0;
  employees: any = [];
  projectDevelopers: any = [];
  data: any = {};
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _projectServie: ProjectService,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() { 
    this.GetFreeEmployees();
    this.GetAllDevelopers();
  }

  GetAllDevelopers() {
    this.projId = Number.parseInt(this._router.url.split('/')[5]);
    this._projectServie.GetAllDevelopers(this.projId).subscribe(
      res => {
        if(res['Success'])
          this.projectDevelopers = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GetFreeEmployees() {
    this.projId = Number.parseInt(this._router.url.split('/')[5]);
    this._employeeService.getFreeEmployees().subscribe(
      res => {
        if(res['Success'])
          this.employees = res['Data']
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  AddEmployee() {
    var e = document.getElementById('ddlAdd') as HTMLSelectElement;
    var selectedValue = e.options[e.selectedIndex].value;
    this.data.ProjectId = this.projId;
    this.data.UserId = selectedValue;
    
    this._projectServie.AddDevelopers(this.data).subscribe(
      res => {
        if(res['Success']) 
          this.ngOnInit();
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  RemoveEmployee() {
    var e = document.getElementById('ddlRemove') as HTMLSelectElement;
    var selectedValue = e.options[e.selectedIndex].value;

    this._projectServie.RemoveDeveloper(this.projId, Number.parseInt(selectedValue)).subscribe(
      res => {
        if(res['Success'])
          this.ngOnInit();
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

} 
