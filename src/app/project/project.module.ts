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


@NgModule({
  declarations: [
    ProjectComponent,
    ListProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
