import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from 'src/app/shared/models/categories';

@Component({
  selector: 'app-proddash',
  templateUrl: './proddash.component.html',
  styleUrls: ['./proddash.component.scss'],
})
export class ProddashComponent implements OnInit {
  caragaryArr: Array<Icategory> = [
    {
      category: 'Books and Toys',
      subcategories: ['Books', 'Toys'],
    },
    {
      category: 'Electronics',
      subcategories: ['Printer', 'Tablets', 'Headphones'],
    },
    {
      category: 'Fashion',
      subcategories: ['Sunglasses', 'Perfume'],
    },
    {
      category: 'Gaming',
      subcategories: [],
    },
    {
      category: 'Laptops',
      subcategories: ['MacBook', 'Windows', 'Chromebook'],
    },
    {
      category: 'Mobiles',
      subcategories: ['Android', 'iPhones'],
    },
    {
      category: 'Mobile Accessories',
      subcategories: ['Phone Cases', 'Earphones', 'SmartWatch'],
    },
  ];
  constructor(private _router: Router, private _routes: ActivatedRoute) {}

  ngOnInit(): void {
    // this.bydefault();
  }
  bydefault() {
    this._router.navigate(['/']);
  }
}
