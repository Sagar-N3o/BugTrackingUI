import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/shared/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bug-priority',
  templateUrl: './create-bug-priority.component.html',
  styleUrls: ['./create-bug-priority.component.css']
})
export class CreateBugPriorityComponent implements OnInit {

  hasError: boolean = false;

  constructor(
    private _bugService: BugService,
    private _router: Router
  ) { }

  ngOnInit() { }

  OnSubmit() {
    // console.log(this._bugService.PriorityForm.value);
    this._bugService.CreateBugPriority(this._bugService.PriorityForm.value).subscribe(
      res => {
        if(res['Success']) {
          this._bugService.PriorityForm.reset();
          this._router.navigate(['admin/bug/priority']);
        }
        else
          this.hasError = true;
      }, 
      err => this.hasError = true
    );
  }

  GoBack() {
    this._router.navigate(['admin/bug/priority']);
  }
}
