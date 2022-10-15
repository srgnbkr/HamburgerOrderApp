import { Injectable } from '@angular/core';
import { Meat } from '../../../interfaces/meat';
import {
  CookingDegree,
  MeatBasket,
} from '../../../basketItemsModels/basketItem';
import {
  CookingDegrees,
  MeatBaskets,
} from '../../../basketItemsModels/basketItems';

@Injectable({
  providedIn: 'root',
})
export class MeatBasketService {
  constructor() {}

  addToMeatBasket(meat: Meat) {
    let item = MeatBaskets.find((m) => m.meat.id === meat.id);
    if (item) item.quantity += 1;
    else {
      let meatBasket = new MeatBasket();
      meatBasket.meat = meat;
      meatBasket.quantity = 1;
      MeatBaskets.push(meatBasket);
    }
  }

  removeMeatBasket(meat: Meat) {
    let item = MeatBaskets.find((m) => m.meat.id === meat.id);
    MeatBaskets.splice(MeatBaskets.indexOf(item), 1);
  }

  getMeatBasket(): MeatBasket[] {
    return MeatBaskets;
  }

  addCookingDegree(time: number) {
    let cookingDegree = new CookingDegree();
    cookingDegree.time = time;
    CookingDegrees.push(cookingDegree);
  }

  removeCookingDegree(time: number) {
    let item = CookingDegrees.find((m) => m.time == time);
    if (item) {
      CookingDegrees.splice(CookingDegrees.indexOf(item), 1);
    }
  }

  listCookingDegree(): CookingDegree[] {
    return CookingDegrees;
  }
}
