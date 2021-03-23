import { TestBed } from '@angular/core/testing';

import { CanActivateCustomerGuard } from './can-activate-customer.guard';

describe('CanActivateCustomerGuard', () => {
  let guard: CanActivateCustomerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateCustomerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
