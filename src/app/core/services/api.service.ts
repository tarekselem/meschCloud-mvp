import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService<TEntity> {
  // TODO: move to env
  private readonly apiUrl = 'https://front-end-api.azure-api.net';
  private readonly username = 'admin';
  private readonly password = 'sample123';

  constructor(private http: HttpClient) {}

  getAll(endpoint: string): Observable<unknown> {
    return this.http.get<unknown>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getDefaultHeaders(),
    });
  }

  private getDefaultHeaders = () => {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
  };
}
