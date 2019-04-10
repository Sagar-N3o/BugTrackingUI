import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/shared/services/bug.service';

@Component({
  selector: 'app-delete-bug',
  templateUrl: './delete-bug.component.html',
  styleUrls: ['./delete-bug.component.css']
})
export class DeleteBugComponent implements OnInit {

  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _bugService: BugService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[4]);
  }

  NotConfirmedDeletion() {
    this._router.navigate(['admin/bug']);
  }

  ConfirmedDeletion() {
    this._bugService.DeleteBug(this.Id).subscribe(
      res => {
        if(res['Success'])
          this._router.navigate(['admin/bug']);
        else {
          this.hasError = true;
          console.log(res['Data']);
        }
      },
      err => {
        this.hasError = true
        console.log(err);
      }
    );
  }

  GoBack() {
    this._router.navigate(['admin/bug']);
  }
}
