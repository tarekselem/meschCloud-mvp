import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { ApiService } from '../core';
import { WorkspacesList, WorkspacesResponseDto } from './models';

@Injectable({
  providedIn: 'root',
})
export class WorkspacesService {
  private readonly endpoint: string;

  constructor(private readonly apiService: ApiService) {
    this.endpoint = 'workspaces';
  }

  getWorkspaces(): Observable<WorkspacesList> {
    return this.apiService.getAll<WorkspacesResponseDto>(this.endpoint).pipe(
      map((data) => new WorkspacesList(data)),
      catchError((error) => {
        console.log(error);
        return of({
          workspaces: [],
        } as unknown as WorkspacesList);
      })
    );
  }
}
