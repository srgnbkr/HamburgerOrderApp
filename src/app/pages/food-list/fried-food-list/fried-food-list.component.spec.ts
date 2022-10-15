import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriedFoodListComponent } from './fried-food-list.component';

describe('FriedFoodListComponent', () => {
  let component: FriedFoodListComponent;
  let fixture: ComponentFixture<FriedFoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriedFoodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriedFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
