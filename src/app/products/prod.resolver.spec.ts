import { TestBed } from '@angular/core/testing';

import { ProdResolver } from './prod.resolver';

describe('ProdResolver', () => {
  let resolver: ProdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
