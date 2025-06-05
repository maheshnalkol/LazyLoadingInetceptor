import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserServiceService } from './user-service.service';
import { Iuser } from '../shared/models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<any> {
  private _user = inject(UserServiceService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Iuser> | Iuser> {
    return this._user.fetchData();
  }
}
