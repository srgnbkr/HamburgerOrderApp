import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/interfaces/ingredient';
import { IngredientBasketService } from '../../../shared/services/basket-service/ingredient-basket-service/ingredient-basket.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor(private ingredientBasketService: IngredientBasketService) {}

  ngOnInit(): void {}

  addToBasket(ingredient: Ingredient) {
    this.ingredientBasketService.addToIngredientBasket(ingredient);
  }

  removeFromBasket(ingredient: Ingredient) {
    this.ingredientBasketService.removeFromIngredientBasket(ingredient);
  }
}
