import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseEntity } from './models/base.model';
import { AuthService } from './auth/services/auth.service';

export class EntityService<T extends BaseEntity> {
  protected apiUrl = 'http://localhost:8080';
  protected opts = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(protected http: HttpClient, protected apiRouteBase: string, protected authService: AuthService) { }

  getItems(): Observable<T[]>{
    this.updateHeadersWithToken();
    return this.http.get<T[]>(`${this.apiUrl}/api/${this.apiRouteBase}`);
  }

  getItem(id:string): Observable<T>{
    this.updateHeadersWithToken();
    return this.http.get<T>(`${this.apiUrl}/api/${this.apiRouteBase}/find/${id}`);
  }

  addItem(item: T): Observable<T>{
    this.updateHeadersWithToken();
    const body = JSON.stringify(item);
    return this.http.post<T>(`${this.apiUrl}/api/${this.apiRouteBase}/add`, body, this.opts);
  }

  updateItem(item: T): Observable<T>{
    this.updateHeadersWithToken();
    const body = JSON.stringify(item);
    return this.http.put<T>(`${this.apiUrl}/api/${this.apiRouteBase}/update/${item._id}`, body, this.opts);
  }

  deleteItem(id: string): Observable<T>{
    this.updateHeadersWithToken();
    return this.http.delete<T>(`${this.apiUrl}/api/${this.apiRouteBase}/delete/${id}`, this.opts);
  }

  private updateHeadersWithToken() {
    this.opts.headers.set('Authorization', `Bearer ${this.authService.accessToken}`);
  }

}
