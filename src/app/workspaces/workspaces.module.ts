import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspacesComponent } from './workspaces.component';
import { WorkspacesRoutingModule } from './workspaces-routing.module';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesListComponent } from './components';

@NgModule({
  declarations: [WorkspacesComponent, WorkspacesListComponent],
  imports: [CommonModule, WorkspacesRoutingModule],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}
