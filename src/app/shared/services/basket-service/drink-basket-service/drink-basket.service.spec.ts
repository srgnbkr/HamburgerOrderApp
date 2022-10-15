import { TestBed } from '@angular/core/testing';

import { DrinkBasketService } from './drink-basket.service';

describe('DrinkBasketService', () => {
  let service: DrinkBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
