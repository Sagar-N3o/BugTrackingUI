import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from '../components/project/project.component';
import { ListProjectComponent } from '../components/list-project/list-project.component';
import { CreateProjectComponent } from '../components/create-project/create-project.component';
import { UpdateProjectComponent } from '../components/update-project/update-project.component';
import { DeleteProjectComponent } from '../components/delete-project/delete-project.component';
import { ProjectDetailsComponent } from '../components/project-details/project-details.component';
import { CreateTechnologyComponent } from '../components/create-technology/create-technology.component';
import { ListTechnologyComponent } from '../components/list-technology/list-technology.component';
import { DeleteTechnologyComponent } from '../components/delete-technology/delete-technology.component';
import { TechnologyDetailsComponent } from '../components/technology-details/technology-details.component';
import { ListProjectStatusComponent } from '../components/list-project-status/list-project-status.component';
import { CreateProjectStatusComponent } from '../components/create-project-status/create-project-status.component';
import { DeleteProjectStatusComponent } from '../components/delete-project-status/delete-project-status.component';
import { ProjectStatusDetailsComponent } from '../components/project-status-details/project-status-details.component';
import { AddDeveloperComponent } from '../components/add-developer/add-developer.component';

const routes: Routes = [
  {
    path: 'admin/project', component: ProjectComponent, children: [
      { path: '', component: ListProjectComponent },
      { path: 'create', component: CreateProjectComponent },
      { path: 'details/:id', component: ProjectDetailsComponent },
      { path: 'update/:id', component: UpdateProjectComponent },
      { path: 'delete/:id', component: DeleteProjectComponent },
      { path: 'developers/manage/:id', component: AddDeveloperComponent },
      {
        path: 'technology', children: [
          { path: '', component: ListTechnologyComponent },
          { path: 'create', component: CreateTechnologyComponent },
          { path: 'delete/:id', component: DeleteTechnologyComponent },
          { path: 'details/:id', component: TechnologyDetailsComponent }
        ]
      },
      {
        path: 'status', children: [
          { path: '', component: ListProjectStatusComponent },
          { path: 'create', component: CreateProjectStatusComponent },
          { path: 'delete/:id', component: DeleteProjectStatusComponent },
          { path: 'details/:id', component: ProjectStatusDetailsComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
