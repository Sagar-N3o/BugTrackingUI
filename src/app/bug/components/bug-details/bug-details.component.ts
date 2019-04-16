import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  bug = {};
  Id: number = 0;
  hasError :boolean = false;

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
    this._bugService.BugDetails(this.Id).subscribe(
      res => {
        if(res['Success'])
          this.bug = {
            'title': res['Data'].Title,
            'description': res['Data'].Description,
            'image': res['Data'].ImageUrl,
            'status': res['Data'].Bug_StatusViewModel.BugStatus,
            'priority': res['Data'].Bug_PrioritiesViewModel.BugPriority,
            'projectName': res['Data'].ProjectViewModel.ProjectName,
            'projectTechnology': res['Data'].ProjectViewModel.Project_TechnologiesViewModel.Name,
            'projectStatus': res['Data'].ProjectViewModel.Project_StatusViewModel.ProjectStatus,
            'projectIsActive': res['Data'].ProjectViewModel.IsActive,
            'employeeName': res['Data'].UserViewModel.FirstName + " " + res['Data'].UserViewModel.LastName,
            'employeeEmail': res['Data'].UserViewModel.Email,
            'employeeContectNumber': res['Data'].UserViewModel.ContectNumber,
            'employeeExperience': res['Data'].UserViewModel.Experience
          };
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/bug']);
  }

}
