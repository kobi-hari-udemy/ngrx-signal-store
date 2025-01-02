import { Component, inject } from "@angular/core";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ShopStore } from "../../store/shop.store";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss', 
  providers: []
})
export class ProductListComponent {
  readonly store = inject(ShopStore);

}