import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;  
  obj: any = {};

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
    this._projectService.ProjectDetails(this.Id).subscribe(
      res => {
        if(res['Success']) {
          this.obj = {
            'bugCount': res['Data'].BugViewModels.length,
            'employeeCount': res['Data'].Project_DeveloperViewModels.length,
            'projectName': res['Data'].ProjectName,
            'projectDescription': res['Data'].Description,
            'projectIsActive': res['Data'].IsActive,
            'projectStatus': res['Data'].Project_StatusViewModel.ProjectStatus,
            'projectTechnology': res['Data'].Project_TechnologiesViewModel.Name,
            'employees': res['Data'].Project_DeveloperViewModels,
            'bugs': res['Data'].BugViewModels
            };
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/project']);
  }
}
