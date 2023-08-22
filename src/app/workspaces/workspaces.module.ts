import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkspacesComponent } from './workspaces.component';
import { WorkspacesRoutingModule } from './workspaces-routing.module';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesListComponent, PaymentComponent } from './components';

@NgModule({
  declarations: [
    WorkspacesComponent,
    WorkspacesListComponent,
    PaymentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, WorkspacesRoutingModule],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}
