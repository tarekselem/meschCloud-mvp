import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core';

@Injectable({
  providedIn: 'root',
})
export class WorkspacesService {
  private readonly endpoint: string;

  constructor(private readonly apiService: ApiService<unknown>) {
    this.endpoint = 'workspace';
  }

  getWorkspaces(): Observable<unknown> {
    return this.apiService.getAll(this.endpoint);
  }
}
