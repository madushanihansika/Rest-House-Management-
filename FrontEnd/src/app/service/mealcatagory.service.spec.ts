import { TestBed, inject } from '@angular/core/testing';

import { MealcatagoryService } from './mealcatagory.service';

describe('MealcatagoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealcatagoryService]
    });
  });

  it('should be created', inject([MealcatagoryService], (service: MealcatagoryService) => {
    expect(service).toBeTruthy();
  }));
});
