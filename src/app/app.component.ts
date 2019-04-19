import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Bug-Tracking-UI';

  constructor(
    private _router: Router
  ) {  }

  ngOnInit() {
    if(sessionStorage.getItem('employee_id') == null)
      this._router.navigate(['login']);
  }
}
