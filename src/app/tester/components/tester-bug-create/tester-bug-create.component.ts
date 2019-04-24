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

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._bugService.GetDataForCreatebug().subscribe(
      res => {
        if (res['Success'])
          this.data = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

}
