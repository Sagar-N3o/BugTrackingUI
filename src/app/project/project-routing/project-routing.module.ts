import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from '../components/project/project.component';
import { ListProjectComponent } from '../components/list-project/list-project.component';
import { CreateProjectComponent } from '../components/create-project/create-project.component';
import { UpdateProjectComponent } from '../components/update-project/update-project.component';
import { DeleteProjectComponent } from '../components/delete-project/delete-project.component';
import { ProjectDetailsComponent } from '../components/project-details/project-details.component';

const routes: Routes = [
  {
    path: 'admin/project', component: ProjectComponent, children: [
      { path: '', component: ListProjectComponent },
      { path: 'create', component: CreateProjectComponent },
      { path: 'details/:id', component: ProjectDetailsComponent },
      { path: 'update/:id', component: UpdateProjectComponent },
      { path: 'delete/:id', component: DeleteProjectComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
