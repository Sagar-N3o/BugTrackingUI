import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';

import { UserModule } from '../user/user.module';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSideNavbarComponent } from './components/admin-side-navbar/admin-side-navbar.component';

@NgModule({
  declarations: [
  AdminNavbarComponent,
  AdminDashboardComponent,
  AdminSideNavbarComponent
],
  imports: [
    AdminRoutingModule,
    UserModule,
    CommonModule
  ]
})
export class AdminModule { }
