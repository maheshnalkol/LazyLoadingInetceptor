import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashComponent } from './users-dash/users-dash.component';
import { ActiveComponent } from './active/active.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';
import { UsersResolver } from './users.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersDashComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'active',
        component: ActiveComponent,
        resolve: {
          user: UsersResolver,
        },
      },
      {
        path: 'inactive',
        component: InactiveuserComponent,
        resolve: {
          user: UsersResolver,
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
