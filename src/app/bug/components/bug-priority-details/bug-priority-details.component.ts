import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/shared/services/bug.service';

@Component({
  selector: 'app-bug-priority-details',
  templateUrl: './bug-priority-details.component.html',
  styleUrls: ['./bug-priority-details.component.css']
})
export class BugPriorityDetailsComponent implements OnInit {

  priority: any = {};
  Id: number = 0;
  hasError: boolean = false;

  constructor(
    private _router: Router,
    private _bugService: BugService
  ) { 
    this.Id = Number.parseInt(this._router.url.split('/')[5]);
    this._bugService.PriorityDetails(this.Id).subscribe(
      res => {
        if(res['Success']) {
          this.priority = {
            'bugCount': res['Data'].BugViewModels.length,
            'name': res['Data'].BugPriority,
            'bugs': res['Data'].BugViewModels
          };
        }
        else
          this.hasError = true;
      },
      err => this.hasError = true
    );
  }

  ngOnInit() {
    
  }

  GOBack() {
    this._router.navigate(['admin/bug/status']);
  }
}
