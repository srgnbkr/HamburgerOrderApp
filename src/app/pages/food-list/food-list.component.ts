import { Component, OnInit } from '@angular/core';
import { MeatService } from '../../shared/services/meat-service/meat.service';
import { Meat } from '../../shared/interfaces/meat';
import { IngredientService } from '../../shared/services/ingredient-service/ingredient.service';
import { Ingredient } from '../../shared/interfaces/ingredient';
import { FriedFoodService } from '../../shared/services/fried-food-service/fried-food.service';
import { FriedFood } from '../../shared/interfaces/friedFood';
import { DrinkService } from '../../shared/services/drink-service/drink.service';
import { Drink } from '../../shared/interfaces/drink';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  meats: Meat[] = [];
  ingredients: Ingredient[] = [];
  friedFoods: FriedFood[] = [];
  drinks: Drink[] = [];
  constructor(
    private meatService: MeatService,
    private ingredientService: IngredientService,
    private friedFoodService: FriedFoodService,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    this.meatList();
    this.ingredientsList();
    this.friedFoodList();
    this.drinkList();
  }

  meatList() {
    this.meatService.getMeats().subscribe((meats) => {
      this.meats = meats.slice(1, 3);
    });
  }

  ingredientsList() {
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  friedFoodList() {
    this.friedFoodService.getFriedFoods().subscribe((friedFoods) => {
      this.friedFoods = friedFoods;
    });
  }

  drinkList() {
    this.drinkService.getDrinks().subscribe((drinks) => {
      this.drinks = drinks;
    });
  }
}
