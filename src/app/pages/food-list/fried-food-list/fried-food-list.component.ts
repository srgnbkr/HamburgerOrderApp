import { Component, Input, OnInit } from '@angular/core';
import { FriedFood } from '../../../shared/interfaces/friedFood';
import { FriedFoodBasketService } from '../../../shared/services/basket-service/fried-food-basket-service/fried-food-basket.service';

@Component({
  selector: 'app-fried-food-list',
  templateUrl: './fried-food-list.component.html',
  styleUrls: ['./fried-food-list.component.scss'],
})
export class FriedFoodListComponent implements OnInit {
  @Input() friedFood: FriedFood;
  constructor(private friedFoodBasketService: FriedFoodBasketService) {}

  ngOnInit(): void {}

  addToBasket(friedFood: FriedFood) {
    this.friedFoodBasketService.addToBasket(friedFood);
  }

  removeFromBasket(friedFood: FriedFood) {
    this.friedFoodBasketService.removeBasket(friedFood);
  }
}
