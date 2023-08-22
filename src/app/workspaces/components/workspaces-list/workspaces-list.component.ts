import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WorkspacesList } from '../../models';

@Component({
  selector: 'app-workspaces-list',
  templateUrl: './workspaces-list.component.html',
  styleUrls: ['./workspaces-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspacesListComponent {
  @Input() data: WorkspacesList;
}
