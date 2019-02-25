import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    ListUserComponent,
    DeleteUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateUserComponent,
    ListUserComponent,
    DeleteUserComponent,
    UserDetailsComponent
  ]
})
export class UserModule { }
