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
          this.bug = res['Data'];
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
