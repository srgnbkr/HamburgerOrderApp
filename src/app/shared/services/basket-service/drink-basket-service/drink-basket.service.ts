import { Injectable } from '@angular/core';
import { Drink } from '../../../interfaces/drink';
import { DrinkBaskets } from '../../../basketItemsModels/basketItems';
import { DrinkBasket } from '../../../basketItemsModels/basketItem';

@Injectable({
  providedIn: 'root',
})
export class DrinkBasketService {
  constructor() {}

  addToBasket(drink: Drink) {
    let item = DrinkBaskets.find((m) => m.drink.id === drink.id);
    if (item) item.quantity += 1;
    else {
      let drinkBasket = new DrinkBasket();
      drinkBasket.drink = drink;
      drinkBasket.quantity = 1;
      DrinkBaskets.push(drinkBasket);
    }
  }

  removeFromBasket(drink: Drink) {
    let item = DrinkBaskets.find((m) => m.drink.id === drink.id);
    DrinkBaskets.splice(DrinkBaskets.indexOf(item), 1);
  }

  listBasket(): DrinkBasket[] {
    return DrinkBaskets;
  }
}
