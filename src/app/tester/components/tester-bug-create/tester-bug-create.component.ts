import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';
import { read } from 'fs';

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
  imageUrl: string = "";
  fileToUpload: File = null;

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
    this._bugService.CreateBug(this._bugService.BugForm.value, this.fileToUpload).subscribe(
      res => {
        if (res['Success'])
          this._router.navigate(['tester/bug']);
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
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

  fileEvent(target: FileList) {
    (<HTMLInputElement>document.getElementById('imageInput')).value = target[0].name;
    this.fileToUpload = target.item(0);
  }

  GoBack() {
    this._router.navigate(['tester/bug']);
  }

}
