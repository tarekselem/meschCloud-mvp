import { Component } from '@angular/core';
import { WorkspacesService } from './workspaces-api.service';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss'],
})
export class WorkspacesComponent {
  workspaces: any[] = [];

  constructor(private readonly service: WorkspacesService) {}

  ngOnInit(): void {
    this.service.getWorkspaces().subscribe((data: any) => {
      this.workspaces = data;
    });
  }
}
