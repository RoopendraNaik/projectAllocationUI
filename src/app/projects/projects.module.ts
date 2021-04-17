import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { ProjectApplicationComponent } from './project-application/project-application.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectApplicationComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
