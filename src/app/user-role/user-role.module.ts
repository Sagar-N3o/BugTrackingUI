import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoleComponent } from './components/list-user-role/list-user-role.component';
import { CreateUserRoleComponent } from './components/create-user-role/create-user-role.component';
import { UpdateUserRoleComponent } from './components/update-user-role/update-user-role.component';
import { DetailsUserRoleComponent } from './components/details-user-role/details-user-role.component';
import { DeleteUserRoleComponent } from './components/delete-user-role/delete-user-role.component';

@NgModule({
  declarations: [
    ListUserRoleComponent,
    CreateUserRoleComponent,
    UpdateUserRoleComponent,
    DetailsUserRoleComponent,
    DeleteUserRoleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUserRoleComponent,
    CreateUserRoleComponent,
    UpdateUserRoleComponent,
    DetailsUserRoleComponent,
    DeleteUserRoleComponent
  ]
})
export class UserRoleModule { }
