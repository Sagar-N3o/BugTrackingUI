import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { UserRoleModule } from './user-role/user-role.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
    UserRoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
