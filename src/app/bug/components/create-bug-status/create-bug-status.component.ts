import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bug-status',
  templateUrl: './create-bug-status.component.html',
  styleUrls: ['./create-bug-status.component.css']
})
export class CreateBugStatusComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() { }

  OnSubmit() {
    this._bugService.CreateBugStatus(this._bugService.StatusForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._bugService.StatusForm.reset();
          this._router.navigate(['admin/bug/status']);
        }
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
