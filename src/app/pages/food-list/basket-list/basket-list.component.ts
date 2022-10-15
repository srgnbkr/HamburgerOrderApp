import { Component, OnInit } from '@angular/core';
import {
  FriedFoodBasket,
  IngredientBasket,
  MeatBasket,
} from '../../../shared/basketItemsModels/basketItem';
import { MeatBasketService } from '../../../shared/services/basket-service/meat-basket-service/meat-basket.service';
import { IngredientBasketService } from '../../../shared/services/basket-service/ingredient-basket-service/ingredient-basket.service';
import { FriedFoodBasketService } from '../../../shared/services/basket-service/fried-food-basket-service/fried-food-basket.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss'],
})
export class BasketListComponent implements OnInit {
  meatBaskets: MeatBasket[] = [];
  ingredientBaskets: IngredientBasket[] = [];
  friedFoodBaskets: FriedFoodBasket[] = [];
  constructor(
    private meatBasketService: MeatBasketService,
    private ingredientBasketService: IngredientBasketService,
    private friedFoodBasketService: FriedFoodBasketService
  ) {}

  ngOnInit(): void {
    this.meatBaskets = this.meatBasketService.getMeatBasket();
    this.ingredientBaskets =
      this.ingredientBasketService.listIngredientBasket();
    this.friedFoodBaskets = this.friedFoodBasketService.getFriedFoodBasket();
  }
}
