import { TestBed, inject } from '@angular/core/testing';

import { LoginformService } from './loginform.service';

describe('LoginformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginformService]
    });
  });

  it('should be created', inject([LoginformService], (service: LoginformService) => {
    expect(service).toBeTruthy();
  }));
});
