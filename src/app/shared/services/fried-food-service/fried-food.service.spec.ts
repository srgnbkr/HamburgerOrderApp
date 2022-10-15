import { TestBed } from '@angular/core/testing';

import { FriedFoodService } from './fried-food.service';

describe('FriedFoodService', () => {
  let service: FriedFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriedFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
