import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-employee-current-project',
  templateUrl: './employee-current-project.component.html',
  styleUrls: ['./employee-current-project.component.css']
})
export class EmployeeCurrentProjectComponent implements OnInit {

  hasError: boolean = false;
  project: any = {};
  Id: number = 0;
  statusList: any = [];
  data: any = {};

  constructor(
    private _router: Router,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(sessionStorage.getItem('employee_id'));

    this._projectService.ProjectDetailsByUserId(this.Id).subscribe(
      res => {
        if(res['Success'])
          this.project = {
            'Id': res['Data'].ProjectViewModel.Id,
            'name': res['Data'].ProjectViewModel.ProjectName,
            'description': res['Data'].ProjectViewModel.Description,
            'isActive': res['Data'].ProjectViewModel.IsActive,
            'status': res['Data'].ProjectViewModel.Project_StatusViewModel.ProjectStatus,
            'technology': res['Data'].ProjectViewModel.Project_TechnologiesViewModel.Name,
            'bugCount': res['Data'].ProjectViewModel.BugViewModels.length,
            'bugs': res['Data'].ProjectViewModel.BugViewModels,
            'employeeCount': res['Data'].ProjectViewModel.Project_DeveloperViewModels.length,
            'employees': res['Data'].ProjectViewModel.Project_DeveloperViewModels
          };
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );

    this._projectService.GetAllStatus().subscribe(
      res => {
        if(res['Success'])
          this.statusList = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    )
  }

  ChangeStatus() {
    var e = document.getElementById('ddlStatus') as HTMLSelectElement;
    var selectedValue = e.options[e.selectedIndex].value;
    this.data.Id = this.project.Id;
    this.data.StatusId = selectedValue;

    this._projectService.ChangeStatus(this.data).subscribe(
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
