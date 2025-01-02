import { Component, computed, inject, input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { ProductItemVm } from '../../view-model/product-item.vm';
import { RankingComponent } from '../ranking/ranking.component';
import { ShopStore } from '../../../../store/shop.store';

@Component({
  selector: 'app-product-card',
  imports: [SharedModule, RankingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly store = inject(ShopStore);
  readonly product = input.required<ProductItemVm>();
  readonly image = computed(() => `images/${this.product().id}.png`);

  readonly isInCart = computed(() => this.product().quantity > 0);

}