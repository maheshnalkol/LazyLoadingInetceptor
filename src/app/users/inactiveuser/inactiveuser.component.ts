import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';

@Component({
  selector: 'app-inactiveuser',
  templateUrl: './inactiveuser.component.html',
  styleUrls: ['./inactiveuser.component.scss'],
})
export class InactiveuserComponent implements OnInit {
  InactiveUserArr: Array<Iuser> = [];
  constructor(private _route: ActivatedRoute) {
    _route.data.subscribe({
      next: (res) => {
        this.InactiveUserArr = res['user'].filter((f: any) => f.id % 2 !== 0);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
