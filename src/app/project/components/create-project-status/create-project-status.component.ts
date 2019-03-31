import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project-status',
  templateUrl: './create-project-status.component.html',
  styleUrls: ['./create-project-status.component.css']
})
export class CreateProjectStatusComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() { }

  OnSubmit() {
    this._projectService.CreateStatus(this._projectService.statusForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._projectService.statusForm.reset();
          this._router.navigate(['admin/project/status']);
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/project/status']);
  }
}
