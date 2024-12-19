import { Component, computed, input } from '@angular/core';
import { RankingComponent } from "../ranking/ranking.component";
import { SharedModule } from '../../shared.module';
import { ProductItemVm } from '../items-list/view-model/product-item.vm';

@Component({
  selector: 'app-item-card',
  imports: [SharedModule, RankingComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  readonly product = input.required<ProductItemVm>();
  readonly image = computed(() => `images/${this.product().id}.png`);

  readonly isInCart = computed(() => this.product().quantity > 0);

}