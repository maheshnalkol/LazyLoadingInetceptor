import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProddashComponent } from './proddash/proddash.component';
import { CategroyComponent } from './categroy/categroy.component';
import { ProdResolver } from './prod.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProddashComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'Books and Toys',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
      {
        path: 'Electronics',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
      {
        path: 'Fashion',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
      {
        path: 'Gaming',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
      {
        path: 'Laptops',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
      {
        path: 'Mobiles',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
      {
        path: 'Mobile Accessories',
        component: CategroyComponent,
        resolve: {
          prod: ProdResolver,
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
