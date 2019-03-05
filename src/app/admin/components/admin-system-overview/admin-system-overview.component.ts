import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-admin-system-overview',
  templateUrl: './admin-system-overview.component.html',
  styleUrls: ['./admin-system-overview.component.css']
})
export class AdminSystemOverviewComponent implements OnInit {

  systemOverView = {
    bugCount: 0,
    projectCount: 0,
    EmployeeCount: 0
  };

  constructor(
    private _dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this._dashboardService.GetSystemOverview()
      .subscribe(
        (res: any) => {
          let data = res['Data'];
          if (data != null) {
            this.systemOverView.bugCount = data['BugCount'];
            this.systemOverView.projectCount = data['ProjectCount'];
            this.systemOverView.EmployeeCount = data['EmployeeCount'];
          }
        },
        (err: any) => console.log(err)
      );
  }
}
