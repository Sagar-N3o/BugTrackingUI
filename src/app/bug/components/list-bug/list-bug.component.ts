import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bug',
  templateUrl: './list-bug.component.html',
  styleUrls: ['./list-bug.component.css']
})
export class ListBugComponent implements OnInit {

  bugs: any = [];
  hasError: boolean = false;

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._bugService.GetAllBugs().subscribe(
      res => {
        if(res['Success'])
          this.bugs = res['Data'];
        else
        this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  BugDetails(id: number) {
    this._router.navigate(['admin/bug/details', id]);
  }

  DeleteBug(id: number) {
    this._router.navigate(['admin/bug/delete', id]);
  }

}
