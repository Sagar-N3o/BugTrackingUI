import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { DashboardService } from './shared/services/dashboard.service';
import { UserService } from './shared/services/user.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    DashboardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
