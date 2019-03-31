import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-technology',
  templateUrl: './create-technology.component.html',
  styleUrls: ['./create-technology.component.css']
})
export class CreateTechnologyComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() { }

  OnSubmit() {
    this._projectService.CreateTechnology(this._projectService.technologyForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._projectService.technologyForm.reset();
          this._router.navigate(['admin/project/technology']);
        }
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
