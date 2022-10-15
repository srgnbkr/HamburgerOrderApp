import { Injectable } from '@angular/core';
import { Ingredient } from '../../../interfaces/ingredient';
import { IngredientBaskets } from '../../../basketItemsModels/basketItems';
import { IngredientBasket } from '../../../basketItemsModels/basketItem';

@Injectable({
  providedIn: 'root',
})
export class IngredientBasketService {
  constructor() {}

  addToIngredientBasket(ingredient: Ingredient) {
    let item = IngredientBaskets.find((m) => m.ingredient.id === ingredient.id);
    if (item) item.quantity += 1;
    else {
      let ingredientBasket = new IngredientBasket();
      ingredientBasket.ingredient = ingredient;
      ingredientBasket.quantity = 1;
      IngredientBaskets.push(ingredientBasket);
    }
  }

  removeFromIngredientBasket(ingredient: Ingredient) {
    let item = IngredientBaskets.find((m) => m.ingredient.id === ingredient.id);
    IngredientBaskets.splice(IngredientBaskets.indexOf(item), 1);
  }

  listIngredientBasket(): IngredientBasket[] {
    return IngredientBaskets;
  }
}
