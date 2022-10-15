import { Injectable } from '@angular/core';
import { FriedFood } from '../../../interfaces/friedFood';
import { FriedFoodBaskets } from '../../../basketItemsModels/basketItems';
import { FriedFoodBasket } from '../../../basketItemsModels/basketItem';

@Injectable({
  providedIn: 'root',
})
export class FriedFoodBasketService {
  constructor() {}

  addToBasket(friedFood: FriedFood) {
    let item = FriedFoodBaskets.find((m) => m.friedFood.id === friedFood.id);
    if (item) item.quantity += 1;
    else {
      let friedFoodBasket = new FriedFoodBasket();
      friedFoodBasket.friedFood = friedFood;
      friedFoodBasket.quantity = 1;
      FriedFoodBaskets.push(friedFoodBasket);
    }
  }

  removeBasket(friedFood: FriedFood) {
    let item = FriedFoodBaskets.find((m) => m.friedFood.id === friedFood.id);
    FriedFoodBaskets.splice(FriedFoodBaskets.indexOf(item), 1);
  }

  getFriedFoodBasket(): FriedFoodBasket[] {
    return FriedFoodBaskets;
  }
}
