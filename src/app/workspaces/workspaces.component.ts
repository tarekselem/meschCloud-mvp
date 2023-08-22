import { Component } from '@angular/core';
import { WorkspacesService } from './workspaces.service';
import { Observable } from 'rxjs';
import { WorkspacesList } from './models';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss'],
})
export class WorkspacesComponent {
  workspaces$: Observable<WorkspacesList>;

  constructor(private readonly service: WorkspacesService) {}

  ngOnInit(): void {
    this.workspaces$ = this.service.getWorkspaces();
  }
}
