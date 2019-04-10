import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/shared/services/bug.service';

@Component({
  selector: 'app-bug-status-details',
  templateUrl: './bug-status-details.component.html',
  styleUrls: ['./bug-status-details.component.css']
})
export class BugStatusDetailsComponent implements OnInit {

  status: any = {};
  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _bugService: BugService
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
    this._bugService.StatusDetails(this.Id).subscribe(
      res => {
        if(res['Success']) {
          this.status = res['Data'];
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  GOBack() {
    this._router.navigate(['admin/bug/status']);
  }

}
