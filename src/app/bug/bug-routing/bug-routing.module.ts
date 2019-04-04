import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugComponent } from '../components/bug/bug.component';
import { ListBugComponent } from '../components/list-bug/list-bug.component';
import { BugDetailsComponent } from '../components/bug-details/bug-details.component';
import { DeleteBugComponent } from '../components/delete-bug/delete-bug.component';
import { ListBugStatusComponent } from '../components/list-bug-status/list-bug-status.component';
import { CreateBugStatusComponent } from '../components/create-bug-status/create-bug-status.component';
import { BugStatusDetailsComponent } from '../components/bug-status-details/bug-status-details.component';
import { DeleteBugStatusComponent } from '../components/delete-bug-status/delete-bug-status.component';
import { UpdateBugStatusComponent } from '../components/update-bug-status/update-bug-status.component';
import { CreateBugPriorityComponent } from '../components/create-bug-priority/create-bug-priority.component';
import { DeleteBugPriorityComponent } from '../components/delete-bug-priority/delete-bug-priority.component';
import { UpdateBugPriorityComponent } from '../components/update-bug-priority/update-bug-priority.component';
import { BugPriorityDetailsComponent } from '../components/bug-priority-details/bug-priority-details.component';
import { ListBugPriorityComponent } from '../components/list-bug-priority/list-bug-priority.component';

const routes: Routes = [
  {
    path: 'admin/bug', component: BugComponent, children: [
      { path: '', component: ListBugComponent },
      { path: 'details/:id', component: BugDetailsComponent },
      { path: 'delete/:id', component: DeleteBugComponent },
      {
        path: 'status', children: [
          { path: '', component: ListBugStatusComponent },
          { path: 'create', component: CreateBugStatusComponent },
          { path: 'details/:id', component: BugStatusDetailsComponent },
          { path: 'delete/:id', component: DeleteBugStatusComponent },
          { path: 'update/:id', component: UpdateBugStatusComponent }
        ]
      },
      {
        path: 'priority', children: [
          { path: '', component: ListBugPriorityComponent },
          { path: 'create', component: CreateBugPriorityComponent },
          { path: 'details/:id', component: BugPriorityDetailsComponent },
          { path: 'delete/:id', component: DeleteBugPriorityComponent },
          { path: 'update/:id', component: UpdateBugPriorityComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugRoutingModule { }
