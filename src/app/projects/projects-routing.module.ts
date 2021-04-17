import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),MatTableModule],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
