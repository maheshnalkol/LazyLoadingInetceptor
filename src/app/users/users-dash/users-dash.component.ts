import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-dash',
  templateUrl: './users-dash.component.html',
  styleUrls: ['./users-dash.component.scss'],
})
export class UsersDashComponent implements OnInit {
  usersList: Array<string> = ['active', 'inactive'];
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._router.navigate(['/users/active']);
  }
}
