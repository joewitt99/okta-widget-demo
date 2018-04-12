import { TestBed, inject } from '@angular/core/testing';

import { SsprService } from './sspr.service';

describe('SsprService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SsprService]
    });
  });

  it('should be created', inject([SsprService], (service: SsprService) => {
    expect(service).toBeTruthy();
  }));
});
