import { Component, OnInit } from '@angular/core';
import { MeatBasketService } from '../../shared/services/basket-service/meat-basket-service/meat-basket.service';
import {
  CookingDegree,
  DrinkBasket,
  FriedFoodBasket,
  IngredientBasket,
  MeatBasket,
} from '../../shared/basketItemsModels/basketItem';
import { delay, Observable, Subject } from 'rxjs';
import { FriedFoodBasketService } from '../../shared/services/basket-service/fried-food-basket-service/fried-food-basket.service';
import { IngredientBasketService } from '../../shared/services/basket-service/ingredient-basket-service/ingredient-basket.service';
import { DrinkService } from '../../shared/services/drink-service/drink.service';
import { DrinkBasketService } from '../../shared/services/basket-service/drink-basket-service/drink-basket.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  cookingTime: CookingDegree[] = [];

  orderToCustomerMessage: string;
  orderToTrayMessage: string;

  meatBasket: MeatBasket[] = [];
  meat: MeatBasket[] = [];
  cookMeatSub$ = new Observable<MeatBasket[]>((observer) => {
    observer.next(this.meatBasketService.getMeatBasket());
    observer.complete();
  });
  cookMeatMessage: string;
  isMeatCooked: boolean;

  friedFoodBasket: FriedFoodBasket[] = [];
  friedFoodSub$ = new Observable<FriedFoodBasket[]>((observer) => {
    observer.next(this.friedFoodBasketService.getFriedFoodBasket());
    observer.complete();
  });
  friedFoodMessage: string;
  friedFoodCooked: boolean;
  friedFood: FriedFoodBasket[] = [];
  friedFoodReadyTime = 5000;

  ingredientBasket: IngredientBasket[] = [];
  ingredientSub$ = new Observable<IngredientBasket[]>((observer) => {
    observer.next(this.ingredientBasketService.listIngredientBasket());
    observer.complete();
  });
  ingredientMessage: string;
  ingredientReady: boolean;
  ingredientReadyTime: 2000;

  drinkBasket: DrinkBasket[] = [];
  drinkSub$ = new Observable<DrinkBasket[]>((observer) => {
    observer.next(this.drinkService.listBasket());
    observer.complete();
  });
  drinkMessage: string;
  drinkReady: boolean;
  drink: DrinkBasket[] = [];

  constructor(
    private meatBasketService: MeatBasketService,
    private friedFoodBasketService: FriedFoodBasketService,
    private ingredientBasketService: IngredientBasketService,
    private drinkService: DrinkBasketService
  ) {}

  ngOnInit(): void {
    this.cookingTime = this.meatBasketService.listCookingDegree();
    this.meat = this.meatBasketService.getMeatBasket();
    this.friedFood = this.friedFoodBasketService.getFriedFoodBasket();

    this.drink = this.drinkService.listBasket();
  }

  prepareOrder() {
    if (this.meat.length > 0) {
      this.cookMeat();
    }
    if (this.friedFood.length > 0) {
      this.friedPotato();
    }
    if (this.drink.length > 0) {
      this.getDrink();
    }
  }

  cookMeat() {
    this.isMeatCooked = false;
    this.cookMeatMessage = 'Hamburger Hazılanıyor';
    this.cookMeatSub$
      .pipe(delay(this.cookingTime[0].time))
      .subscribe((meat) => {
        this.meatBasket = meat;
        this.isMeatCooked = true;
        this.cookIngredient();
      });
  }

  friedPotato() {
    this.friedFoodCooked = false;
    this.friedFoodMessage = 'Patates Kızartılıyor';
    this.friedFoodSub$
      .pipe(delay(this.friedFoodReadyTime))
      .subscribe((friedFood) => {
        this.friedFoodBasket = friedFood;

        this.friedFoodCooked = true;
      });
  }

  getDrink() {
    this.drinkReady = false;
    this.drinkMessage = 'İçecek Hazırlanıyor';
    this.drinkSub$.pipe(delay(2000)).subscribe((drink) => {
      this.drinkBasket = drink;

      this.drinkReady = true;
    });
  }

  cookIngredient() {
    this.ingredientReady = false;
    this.ingredientMessage = 'İç Malzemeler Hazırlanıyor';
    this.ingredientSub$
      .pipe(delay(this.ingredientReadyTime))
      .subscribe((ingredient) => {
        this.ingredientBasket = ingredient;
        this.ingredientReady = true;
      });
  }

  sendOrderToTray() {
    setTimeout(() => {
      this.orderToTrayMessage = 'Sipariş Tepsiye Yerleştirildi';
    }, 7000);
    setTimeout(() => {
      this.orderToCustomerMessage = 'Sipariş Müşteriye Servis Edildi';
    }, 8000);
  }
}
