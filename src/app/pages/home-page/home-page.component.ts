import { Component, OnInit } from '@angular/core';
import { MeatService } from '../../shared/services/meat-service/meat.service';
import { IngredientService } from '../../shared/services/ingredient-service/ingredient.service';
import { FriedFoodService } from '../../shared/services/fried-food-service/fried-food.service';
import { DrinkService } from '../../shared/services/drink-service/drink.service';
import { Router } from '@angular/router';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isStockAmount: string[] = [];
  stockAmountMessage!: string;
  isLoaded!: boolean;
  spinnerMessage = 'Stok Kontorlü Yapılıyor...';
  stockAmountSubs$ = new Observable<any>((observer) => {
    this.isStockAmount.length > 0
      ? observer.next('Stokta ürün olmadığı için siparişinizi alamıyoruz :(')
      : setTimeout(() => {
          observer.next(this.router.navigate(['/ürünler']));
        }, 3000);
    observer.complete();
  });

  constructor(
    private meatService: MeatService,
    private ingredientService: IngredientService,
    private friedFoodService: FriedFoodService,
    private drinkService: DrinkService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkMeatStockAmount();
    this.checkIngredientStockAmount();
    this.checkFriedFoodStockAmount();
    this.checkDrinkStockAmount();
  }

  stockAmountControl() {
    this.isLoaded = false;
    this.stockAmountSubs$.pipe(delay(3000)).subscribe((message) => {
      this.stockAmountMessage = message;

      this.isLoaded = true;
    });
  }

  checkMeatStockAmount() {
    this.meatService.getMeats().subscribe((meat) => {
      meat.forEach((meat) => {
        if (meat.stockAmount === 0) {
          this.isStockAmount.push(meat.name);
        }
      });
    });
  }

  checkIngredientStockAmount() {
    this.ingredientService
      .getIngredients()

      .subscribe((ingredient) => {
        ingredient.forEach((ingredient) => {
          if (ingredient.stockAmount === 0) {
            this.isStockAmount.push(ingredient.name);
          }
        });
      });
  }

  checkFriedFoodStockAmount() {
    this.friedFoodService.getFriedFoods().subscribe((friedFood) => {
      friedFood.forEach((friedFood) => {
        if (friedFood.stockAmount === 0) {
          this.isStockAmount.push(friedFood.name);
        }
      });
    });
  }

  checkDrinkStockAmount() {
    this.drinkService.getDrinks().subscribe((drink) => {
      drink.forEach((drink) => {
        if (drink.stockAmount === 0) {
          this.isStockAmount.push(drink.name);
        }
      });
    });
  }
}
