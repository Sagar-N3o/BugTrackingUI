import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-bug',
  templateUrl: './employee-list-bug.component.html',
  styleUrls: ['./employee-list-bug.component.css']
})
export class EmployeeListBugComponent implements OnInit {

  bugs: any = [];
  hasError: boolean = false;
  Id: number = 0;

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.Id = Number.parseInt(sessionStorage.getItem('employee_id'));

    this._bugService.GetBugsByUser(this.Id).subscribe(
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
    this._router.navigate(['employee/bug/details', id]);
  }

}
