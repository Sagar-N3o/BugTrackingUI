import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AdminModule } from '../admin/admin.module';
import { BugRoutingModule } from './bug-routing/bug-routing.module';

import { BugComponent } from './components/bug/bug.component';
import { ListBugComponent } from './components/list-bug/list-bug.component';
import { BugDetailsComponent } from './components/bug-details/bug-details.component';
import { DeleteBugComponent } from './components/delete-bug/delete-bug.component';
import { ListBugStatusComponent } from './components/list-bug-status/list-bug-status.component';
import { CreateBugStatusComponent } from './components/create-bug-status/create-bug-status.component';
import { BugStatusDetailsComponent } from './components/bug-status-details/bug-status-details.component';
import { DeleteBugStatusComponent } from './components/delete-bug-status/delete-bug-status.component';
import { UpdateBugStatusComponent } from './components/update-bug-status/update-bug-status.component';
import { CreateBugPriorityComponent } from './components/create-bug-priority/create-bug-priority.component';
import { DeleteBugPriorityComponent } from './components/delete-bug-priority/delete-bug-priority.component';
import { UpdateBugPriorityComponent } from './components/update-bug-priority/update-bug-priority.component';
import { BugPriorityDetailsComponent } from './components/bug-priority-details/bug-priority-details.component';
import { ListBugPriorityComponent } from './components/list-bug-priority/list-bug-priority.component';

@NgModule({
  declarations: [
    BugComponent, 
    ListBugComponent, 
    BugDetailsComponent, 
    DeleteBugComponent, 
    ListBugStatusComponent, 
    CreateBugStatusComponent, 
    BugStatusDetailsComponent, 
    DeleteBugStatusComponent, 
    UpdateBugStatusComponent,
    CreateBugPriorityComponent, 
    DeleteBugPriorityComponent, 
    UpdateBugPriorityComponent, 
    BugPriorityDetailsComponent, 
    ListBugPriorityComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    SharedModule,
    BugRoutingModule
  ]
})
export class BugModule { }
