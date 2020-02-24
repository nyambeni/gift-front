import { TestBed } from '@angular/core/testing';

import { SevirceService } from './sevirce.service';

describe('SevirceService', () => {
  let service: SevirceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevirceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
