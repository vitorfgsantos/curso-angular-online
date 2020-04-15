import { TestBed } from '@angular/core/testing';

import { EstaLogadoGuard } from './esta-logado.guard';

describe('EstaLogadoGuard', () => {
  let guard: EstaLogadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstaLogadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
