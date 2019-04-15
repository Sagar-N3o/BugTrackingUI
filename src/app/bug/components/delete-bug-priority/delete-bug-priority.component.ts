import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/shared/services/bug.service';

@Component({
  selector: 'app-delete-bug-priority',
  templateUrl: './delete-bug-priority.component.html',
  styleUrls: ['./delete-bug-priority.component.css']
})
export class DeleteBugPriorityComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _bugService: BugService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
  }

  NotConfirmedDeletion() {
    this._router.navigate(['admin/bug/priority']);
  }

  ConfirmedDeletion() {
    this._bugService.DeleteBugPriority(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/bug/priority']);
        else {
          this.hasError = true;
          console.log(res['Data']);
        }
      },
      err => {
        this.hasError = true;
        console.log(err);
      }
    );
  }

  GoBack() {
    this._router.navigate(['admin/bug/priority']);
  }
}
