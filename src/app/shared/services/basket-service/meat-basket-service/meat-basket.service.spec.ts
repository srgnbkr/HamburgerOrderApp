import { TestBed } from '@angular/core/testing';

import { MeatBasketService } from './meat-basket.service';

describe('MeatBasketService', () => {
  let service: MeatBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeatBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
