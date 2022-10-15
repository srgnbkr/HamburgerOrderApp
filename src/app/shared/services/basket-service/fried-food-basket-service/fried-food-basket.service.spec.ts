import { TestBed } from '@angular/core/testing';

import { FriedFoodBasketService } from './fried-food-basket.service';

describe('FriedFoodBasketService', () => {
  let service: FriedFoodBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriedFoodBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
