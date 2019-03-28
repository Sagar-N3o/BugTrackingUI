import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
  }

  NotConfirmedDeletion() {
    this._router.navigate(['admin/project']);
  }

  ConfirmedDeletion() {
    this._projectService.DeleteProject(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/project'])
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
