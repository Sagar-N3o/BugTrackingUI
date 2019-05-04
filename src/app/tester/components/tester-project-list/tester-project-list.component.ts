import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester-project-list',
  templateUrl: './tester-project-list.component.html',
  styleUrls: ['./tester-project-list.component.css']
})
export class TesterProjectListComponent implements OnInit {

  hasError: boolean = false;
  projects: any = [];

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._projectService.GetFinished().subscribe(
      res => {
        if (res['Success'])
          this.projects = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  ProjectDetails(id: number) {
    this._router.navigate(['tester/project/details', id]);
  }

}
