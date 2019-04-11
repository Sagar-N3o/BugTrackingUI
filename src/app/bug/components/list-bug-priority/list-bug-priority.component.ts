import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bug-priority',
  templateUrl: './list-bug-priority.component.html',
  styleUrls: ['./list-bug-priority.component.css']
})
export class ListBugPriorityComponent implements OnInit {

  priorities: any = [];
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _bugService: BugService
  ) { }

  ngOnInit() {
    this._bugService.GetAllBugPriority().subscribe(
      res => {
        if(res['Success'])
          this.priorities = res['Data'];
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  PriorityDetails(id: number) {
    this._router.navigate(['admin/bug/priority/details', id]);
  }

  DeletePriority(id: number) {
    this._router.navigate(['admin/bug/priority/delete', id]);
  }

}
