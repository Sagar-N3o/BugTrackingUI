import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-technology',
  templateUrl: './delete-technology.component.html',
  styleUrls: ['./delete-technology.component.css']
})
export class DeleteTechnologyComponent implements OnInit {

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
    this._router.navigate(['admin/project/technology']);
  }

  ConfirmedDeletion() {
    this._projectService.DeleteTechnology(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/project/technology']);
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }
  
  GoBack() {
    this._router.navigate(['admin/project/technology']);
  }
}
