import { TestBed } from '@angular/core/testing';

import { IngredientBasketService } from './ingredient-basket.service';

describe('IngredientBasketService', () => {
  let service: IngredientBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
