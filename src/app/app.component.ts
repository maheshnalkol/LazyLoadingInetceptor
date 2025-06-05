import { Component, inject } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lazyLoading';
  private _laoder = inject(LoaderService);
  loading$ = this._laoder.isLoading;
}
