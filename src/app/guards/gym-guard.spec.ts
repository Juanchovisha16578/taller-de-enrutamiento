import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gymGuard } from './gym-guard';

describe('gymGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => gymGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
