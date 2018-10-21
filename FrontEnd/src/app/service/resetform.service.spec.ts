import { TestBed, inject } from '@angular/core/testing';

import { ResetformService } from './resetform.service';

describe('ResetformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetformService]
    });
  });

  it('should be created', inject([ResetformService], (service: ResetformService) => {
    expect(service).toBeTruthy();
  }));
});
