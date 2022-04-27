import { TestBed } from '@angular/core/testing';

import { MegasApiService } from './megas-api.service';

describe('MegasApiService', () => {
  let service: MegasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
