import { Meat } from '../interfaces/meat';
import { Ingredient } from '../interfaces/ingredient';
import { FriedFood } from '../interfaces/friedFood';
import { Drink } from '../interfaces/drink';

export class MeatBasket {
  quantity: number;
  meat: Meat;
}

export class IngredientBasket {
  quantity: number;
  ingredient: Ingredient;
}

export class FriedFoodBasket {
  quantity: number;
  friedFood: FriedFood;
}

export class DrinkBasket {
  quantity: number;
  drink: Drink;
}
