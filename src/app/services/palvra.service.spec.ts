import { TestBed } from '@angular/core/testing';

import { PalvraService } from './palvra.service';

describe('PalvraService', () => {
  let service: PalvraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalvraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
