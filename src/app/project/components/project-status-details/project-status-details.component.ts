import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-status-details',
  templateUrl: './project-status-details.component.html',
  styleUrls: ['./project-status-details.component.css']
})
export class ProjectStatusDetailsComponent implements OnInit {

  status: any = {};
  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
    this._projectService.StatusDetails(this.Id).subscribe(
      res => {
        if(res['Success'])
          this.status = res['Data'];
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
