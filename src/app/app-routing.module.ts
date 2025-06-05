import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotfoundComponent } from './shared/components/page-notfound/page-notfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((res) => res.UsersModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((res) => res.ProductsModule),
  },
  {
    path: 'page-not-found',
    component: PageNotfoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
