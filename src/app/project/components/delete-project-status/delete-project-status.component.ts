import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-project-status',
  templateUrl: './delete-project-status.component.html',
  styleUrls: ['./delete-project-status.component.css']
})
export class DeleteProjectStatusComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
  }

  NotConfirmedDeletion() {
    this._router.navigate(['admin/project/status']);
  }

  ConfirmedDeletion() {
    this._projectService.DeleteStatus(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/project/status']);
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }
}
