import { TestBed } from '@angular/core/testing';

import { NaoEstaLogadoGuard } from './nao-esta-logado.guard';

describe('NaoEstaLogadoGuard', () => {
  let guard: NaoEstaLogadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NaoEstaLogadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
