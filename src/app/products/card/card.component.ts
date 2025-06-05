import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/models/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() getdata!: Iproduct;

  constructor() {}

  ngOnInit(): void {}
}
