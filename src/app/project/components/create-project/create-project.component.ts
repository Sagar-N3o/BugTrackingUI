import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  hasError: boolean = false;
  technologies: any = [];

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
  }

  OnSubmit() {
    this._projectService.CreateProject(this._projectService.projectForm.value).subscribe(
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
