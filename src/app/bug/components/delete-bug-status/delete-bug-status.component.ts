import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/shared/services/bug.service';

@Component({
  selector: 'app-delete-bug-status',
  templateUrl: './delete-bug-status.component.html',
  styleUrls: ['./delete-bug-status.component.css']
})
export class DeleteBugStatusComponent implements OnInit {

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
    this._router.navigate(['admin/bug/status']);
  }

  ConfirmedDeletion() {
    this._bugService.DeleteBugStatus(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/bug/status']);
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/bug/status']);
  }
}
