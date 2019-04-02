import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects: any = [];
  hasError: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._projectService.GetAllProjects().subscribe(
      res => {
        if(res['Success'])
          this.projects = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  ManageDevelopers(id: number) {
    this._router.navigate(['admin/project/developers/manage', id]);
  }

  ProjectDetails(id: number) {
    this._router.navigate(['admin/project/details', id]);
  }

  DeleteProject(id: number) {
    this._router.navigate(['admin/project/delete', id]);
  }

  UpdateProject(id: number) {
    this._router.navigate(['admin/project/update', id]);
  }
}
