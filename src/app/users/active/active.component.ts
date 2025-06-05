import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss'],
})
export class ActiveComponent implements OnInit {
  activeUserArr: Array<Iuser> = [];
  constructor(private _route: ActivatedRoute) {
    _route.data.subscribe({
      next: (res) => {
        this.activeUserArr = res['user'].filter((f: any) => f.id % 2 === 0);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
}
