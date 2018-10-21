import { TestBed, inject } from '@angular/core/testing';

import { ForgotformService } from './forgotform.service';

describe('ForgotformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotformService]
    });
  });

  it('should be created', inject([ForgotformService], (service: ForgotformService) => {
    expect(service).toBeTruthy();
  }));
});
