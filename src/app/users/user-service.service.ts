import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../shared/models/users';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  BASE_URL: string = `${environment.jsonData}`;
  constructor(private _http: HttpClient) {}
  fetchData(): Observable<Array<Iuser>> {
    return this._http.get<any>(`${this.BASE_URL}`);
  }
}
