import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';

import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AdminRoutingModule,
    UserModule,
    CommonModule
  ]
})
export class AdminModule { }
