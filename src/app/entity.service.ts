import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseEntity } from './models/base.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}

export class EntityService<T extends BaseEntity> {
  protected apiUrl = 'http://localhost:8080';

  constructor(protected http: HttpClient, protected apiRouteBase: string) { }

  getItems(): Observable<T>{
    return this.http.get<T>(`${this.apiUrl}/api/${this.apiRouteBase}`);
  }

  getItem(id:string): Observable<T>{
    return this.http.get<T>(`${this.apiUrl}/api/${this.apiRouteBase}/${id}`);
  }

  addItem(item: T): Observable<T>{
    const body = JSON.stringify(item);
    return this.http.post<T>(`${this.apiUrl}/api/${this.apiRouteBase}`, body, httpOptions);
  }

  updateItem(item: T): Observable<T>{
    const body = JSON.stringify(item);
    return this.http.put<T>(`${this.apiUrl}/api/${this.apiRouteBase}/${item._id}`, body, httpOptions);
  }

  deleteItem(id: string): Observable<T>{
    return this.http.delete<T>(`${this.apiUrl}/api/${this.apiRouteBase}/${id}`, httpOptions);
  }

}
