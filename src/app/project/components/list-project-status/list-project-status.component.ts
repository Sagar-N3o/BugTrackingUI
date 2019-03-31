import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-project-status',
  templateUrl: './list-project-status.component.html',
  styleUrls: ['./list-project-status.component.css']
})
export class ListProjectStatusComponent implements OnInit {

  statusList: any = [];
  hasError: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._projectService.GetAllStatus().subscribe(
      res => {
        if(res['Success'])
          this.statusList = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  StatusDetails(id: number) {
    this._router.navigate(['admin/project/status/details', id]);
  }

  DeleteStatus(id: number) {
    this._router.navigate(['admin/project/status/delete', id]);
  }
}
