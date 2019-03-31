import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-technology',
  templateUrl: './list-technology.component.html',
  styleUrls: ['./list-technology.component.css']
})
export class ListTechnologyComponent implements OnInit {

  technologies: any = [];
  hasError: boolean = false;

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

  TechnologyDetails(id: number) {
    this._router.navigate(['admin/project/technology/details', id]);
  }

  DeleteTechnology(id: number) {
    this._router.navigate(['admin/project/technology/delete', id]);
  }
}
