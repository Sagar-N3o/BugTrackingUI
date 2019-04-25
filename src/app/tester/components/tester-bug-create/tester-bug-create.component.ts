import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester-bug-create',
  templateUrl: './tester-bug-create.component.html',
  styleUrls: ['./tester-bug-create.component.css']
})
export class TesterBugCreateComponent implements OnInit {

  hasError: boolean = false;
  data: any = {};
  projectId: number = 0;
  users: any = [];

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._bugService.GetDataForCreatebug().subscribe(
      res => {
        if (res['Success']) {
          this.data = {
            'projects': res['Data'].Projects,
            'users': res['Data'].Users,
            'priorities': res['Data'].Priorities,
            'statusList': res['Data'].StatusList
          }
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  OnSubmit() {
    console.log(this._bugService.BugForm.value);
  }

  OnProjectSelected(projId: number) {
    this.projectId = projId;
    this.users = [];

    this.data.users.forEach(user => {
      if (user.Project_DevelopersViewModel[0] != null)
        if (user.Project_DevelopersViewModel[0].ProjectId == this.projectId)
          this.users.push(user);
    });
  }

  fileEvent(name) {
    (<HTMLInputElement>document.getElementById('imageInput')).value = name;
  }

  GoBack() {
    this._router.navigate(['tester/bug']);
  }

}
