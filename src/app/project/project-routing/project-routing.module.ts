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

const routes: Routes = [
  {
    path: 'admin/project', component: ProjectComponent, children: [
      { path: '', component: ListProjectComponent },
      { path: 'create', component: CreateProjectComponent },
      { path: 'details/:id', component: ProjectDetailsComponent },
      { path: 'update/:id', component: UpdateProjectComponent },
      { path: 'delete/:id', component: DeleteProjectComponent },
      {
        path: 'technology', children: [
          { path: '', component: ListTechnologyComponent },
          { path: 'create', component: CreateTechnologyComponent },
          { path: 'delete/:id', component: DeleteTechnologyComponent },
          { path: 'details/:id', component: TechnologyDetailsComponent }
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
