import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProdService {
  BASE_URL: string = `${environment.productData}`;
  constructor(private _http: HttpClient) {}
  fetchAlldata(cat: string): Observable<Array<Iproduct>> {
    let params = new HttpParams().set('category', cat);
    return this._http.get<any>(`${this.BASE_URL}/filter`, {
      params: params,
    });
  }
}
