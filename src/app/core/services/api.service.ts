import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // TODO: move to env
  private readonly apiUrl = 'api/';
  private readonly username = 'admin';
  private readonly password = 'sample123';

  constructor(private http: HttpClient) {}

  getAll<TResponse>(endpoint: string): Observable<TResponse> {
    return this.http.get<TResponse>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getDefaultHeaders(),
    });
  }

  // TODO: move to interceptor
  private getDefaultHeaders = () => {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
  };
}
