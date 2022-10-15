import { Component, Input, OnInit } from '@angular/core';
import { Drink } from '../../../shared/interfaces/drink';
import { DrinkBasketService } from '../../../shared/services/basket-service/drink-basket-service/drink-basket.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {
  @Input() drink: Drink;
  constructor(private drinkBasketService: DrinkBasketService) {}

  ngOnInit(): void {}

  addToBasket(drink: Drink) {
    this.drinkBasketService.addToBasket(drink);
  }

  removeFromBasket(drink: Drink) {
    this.drinkBasketService.removeFromBasket(drink);
  }
}
