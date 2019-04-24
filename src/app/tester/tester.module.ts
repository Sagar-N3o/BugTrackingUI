import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TesterRoutingModule } from './tester-routing/tester-routing.module';

import { TesterDashboardComponent } from './components/tester-dashboard/tester-dashboard.component';

@NgModule({
  declarations: [
    TesterDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TesterRoutingModule
  ]
})
export class TesterModule { }
