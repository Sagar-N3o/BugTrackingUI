import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-current-project',
  templateUrl: './employee-current-project.component.html',
  styleUrls: ['./employee-current-project.component.css']
})
export class EmployeeCurrentProjectComponent implements OnInit {

  hasError: boolean = false;
  project: any = {};
  Id: number = 0;
  data: any = {};

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(sessionStorage.getItem('employee_id'));
    this.LoadProjectDetails();
  }

  LoadProjectDetails() {
    this._projectService.ProjectDetailsByUserId(this.Id).subscribe(
      res => {
        if (res['Success']) {
          if (res['Data'].ProjectViewModel != null)
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
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  ChangeStatus(id: number) {
    this.data.Id = this.project.Id;
    this.data.StatusId = id;

    this._projectService.ChangeStatus(this.data).subscribe(
      res => {
        if (res['Success'])
          this.ngOnInit();
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['employee/profile']);
  }
}
