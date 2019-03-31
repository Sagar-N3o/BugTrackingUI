import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  hasError: boolean = false;
  Id: number = 0;
  project: any = {};
  technologies: any = {};
  projectStatues: any = {};

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._projectService.GetAllTechnologies().subscribe(
      res => {
        if(res['Success'])
          this.technologies = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );

    this._projectService.GetAllStatus().subscribe(
      res => {
        if(res['Success'])
          this.projectStatues = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );

    this.Id = Number.parseInt(this._router.url.split('/')[4]);
    this._projectService.ProjectDetails(this.Id).subscribe(
      res => {
        if(res['Success']) {
          this.project = res['Data'];
          this.LoadFormData();
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  LoadFormData() {
    this._projectService.projectForm.get('ProjectName').setValue(this.project.ProjectName);
    this._projectService.projectForm.get('Description').setValue(this.project.Description);
    this._projectService.projectForm.get('TechnologyId').setValue(this.project.TechnologyId);
    this._projectService.projectForm.get('IsActive').setValue(this.project.IsActive);
    this._projectService.projectForm.get('ProjectStatusId').setValue(this.project.ProjectStatusId);
  }

  OnSubmit() {
    console.log(this._projectService.projectForm.value);
    this._projectService.UpdateProject(this.Id, this._projectService.projectForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._projectService.projectForm.reset();
          this._router.navigate(['admin/project']);
        }
        else {
          this.hasError = true;
          console.log(res['Data']);
        }
      },
      err => {
        this.hasError = true;
        console.log(err);
      } 
    );
  }

  GoBack() {
    this._router.navigate(['admin/project']);
  }
}
