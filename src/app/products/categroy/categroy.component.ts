import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';

@Component({
  selector: 'app-categroy',
  templateUrl: './categroy.component.html',
  styleUrls: ['./categroy.component.scss'],
})
export class CategroyComponent implements OnInit {
  categoriesArr: Array<Iproduct> = [];
  constructor(private _route: ActivatedRoute) {
    _route.data.subscribe({
      next: (res) => {
        this.categoriesArr = res['prod'];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
}
