import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashComponent } from './users-dash/users-dash.component';
import { ActiveComponent } from './active/active.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersDashComponent, ActiveComponent, InactiveuserComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [],
})
export class UsersModule {
  constructor() {
    console.log('User module loaded');
  }
}
