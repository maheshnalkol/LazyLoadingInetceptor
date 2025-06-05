import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProddashComponent } from './proddash/proddash.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CategroyComponent } from './categroy/categroy.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../shared/material/material.module';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  declarations: [
    ProddashComponent,
    CategroyComponent,
    CardComponent,
    RatingComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule,MaterialModule],
  exports: [],
})
export class ProductsModule {}
