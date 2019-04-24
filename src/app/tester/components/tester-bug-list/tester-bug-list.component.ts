import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/shared/services/bug.service';

@Component({
  selector: 'app-tester-bug-list',
  templateUrl: './tester-bug-list.component.html',
  styleUrls: ['./tester-bug-list.component.css']
})
export class TesterBugListComponent implements OnInit {

  hasError: boolean = false;
  bugs: any = [];

  constructor(
    private _router: Router,
    private _bugService: BugService
  ) { }

  ngOnInit() {
    this._bugService.GetForTester().subscribe(
      res => {
        if (res['Success'])
          this.bugs = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  BugDetails(id: number) {
    this._router.navigate(['tester/bug/details', id]);
  }

}
