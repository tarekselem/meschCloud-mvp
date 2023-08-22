import { Component, Input } from '@angular/core';
import { WorkspacesList } from '../../models';

@Component({
  selector: 'app-workspaces-list',
  templateUrl: './workspaces-list.component.html',
  styleUrls: ['./workspaces-list.component.scss'],
})
export class WorkspacesListComponent {
  @Input() data: WorkspacesList;
}
