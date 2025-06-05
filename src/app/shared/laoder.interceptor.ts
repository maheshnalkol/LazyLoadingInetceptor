import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class LaoderInterceptor implements HttpInterceptor {
  constructor() {}
  private _loaderservice = inject(LoaderService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loaderservice.showloader();
    return next
      .handle(request)
      .pipe(finalize(() => this._loaderservice.hideloader()));
  }
}
