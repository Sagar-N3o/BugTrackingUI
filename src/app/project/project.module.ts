import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing/project-routing.module';

import { ProjectComponent } from './components/project/project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CreateTechnologyComponent } from './components/create-technology/create-technology.component';
import { ListTechnologyComponent } from './components/list-technology/list-technology.component';
import { DeleteTechnologyComponent } from './components/delete-technology/delete-technology.component';
import { TechnologyDetailsComponent } from './components/technology-details/technology-details.component';
import { ListProjectStatusComponent } from './components/list-project-status/list-project-status.component';
import { CreateProjectStatusComponent } from './components/create-project-status/create-project-status.component';
import { DeleteProjectStatusComponent } from './components/delete-project-status/delete-project-status.component';
import { ProjectStatusDetailsComponent } from './components/project-status-details/project-status-details.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ListProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    ProjectDetailsComponent,
    CreateTechnologyComponent,
    ListTechnologyComponent,
    DeleteTechnologyComponent,
    TechnologyDetailsComponent,
    ListProjectStatusComponent,
    CreateProjectStatusComponent,
    DeleteProjectStatusComponent,
    ProjectStatusDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
