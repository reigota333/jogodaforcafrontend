import { TestBed } from '@angular/core/testing';

import { DificuldadeService } from './dificuldade.service';

describe('DificuldadeService', () => {
  let service: DificuldadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DificuldadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
