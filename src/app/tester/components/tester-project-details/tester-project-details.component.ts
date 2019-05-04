import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester-project-details',
  templateUrl: './tester-project-details.component.html',
  styleUrls: ['./tester-project-details.component.css']
})
export class TesterProjectDetailsComponent implements OnInit {

  hasError: boolean = false;
  project: any = {};
  Id: number = 0;
  data: any = {};

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }


  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
    this.LoadProjectDetails();
  }

  LoadProjectDetails() {
    this._projectService.ProjectDetails(this.Id).subscribe(
      res => {
        if (res['Success']) {
          this.project = {
            'Id': res['Data'].Id,
            'name': res['Data'].ProjectName,
            'description': res['Data'].Description,
            'isActive': res['Data'].IsActive,
            'status': res['Data'].Project_StatusViewModel.ProjectStatus,
            'technology': res['Data'].Project_TechnologiesViewModel.Name,
            'bugCount': res['Data'].BugViewModels.length,
            'bugs': res['Data'].BugViewModels,
            'employeeCount': res['Data'].Project_DeveloperViewModels.length,
            'employees': res['Data'].Project_DeveloperViewModels
          };
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
