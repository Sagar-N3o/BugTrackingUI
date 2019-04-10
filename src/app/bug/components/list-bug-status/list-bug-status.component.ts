import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bug-status',
  templateUrl: './list-bug-status.component.html',
  styleUrls: ['./list-bug-status.component.css']
})
export class ListBugStatusComponent implements OnInit {

  statusList: any = [];
  hasError: boolean = false;

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._bugService.GetAllBugStatus().subscribe(
      res => {
        if(res['Success'])
          this.statusList = res['Data'];
        else 
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  StatusDetails(id: number) {
    this._router.navigate(['admin/bug/status/details', id]);
  }

  DeleteStatus(id: number) {
    this._router.navigate(['admin/bug/status/delete', id]);
  }
}
