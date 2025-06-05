import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../shared/models/products';
import { ProdService } from './prod.service';

@Injectable({
  providedIn: 'root',
})
export class ProdResolver implements Resolve<Array<Iproduct>> {
  private _prod = inject(ProdService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Iproduct>> {
    let category = route.queryParamMap.get('category')!;

    return this._prod.fetchAlldata(category);
  }
}
