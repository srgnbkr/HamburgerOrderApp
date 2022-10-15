import { Component, Input, OnInit } from '@angular/core';
import { Meat } from '../../../shared/interfaces/meat';
import { MeatBasketService } from '../../../shared/services/basket-service/meat-basket-service/meat-basket.service';
import { CookingDegree } from '../../../shared/basketItemsModels/basketItem';

@Component({
  selector: 'app-meat-list',
  templateUrl: './meat-list.component.html',
  styleUrls: ['./meat-list.component.scss'],
})
export class MeatListComponent implements OnInit {
  selectedValue: number;
  clicked: boolean;
  cooking: CookingDegree[] = [];

  @Input() meat: Meat;
  constructor(private meatBasketService: MeatBasketService) {}

  cookingDegrees = [
    { time: 2000, name: 'Az Pişmiş' },
    { time: 3000, name: 'Pişmiş' },
    { time: 4000, name: 'Çok Pişmiş' },
  ];

  ngOnInit(): void {}

  addToBasket(meat: Meat) {
    this.meatBasketService.addToMeatBasket(meat);
    this.meatBasketService.addCookingDegree(this.selectedValue);
    this.clicked = true;
  }

  removeFromBasket(meat: Meat) {
    this.meatBasketService.removeMeatBasket(meat);
    this.meatBasketService.removeCookingDegree(this.selectedValue);
    this.clicked = false;
  }

  selectChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }
}
