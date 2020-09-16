import { TestBed } from '@angular/core/testing';

import { GameRequestsService } from './game-requests.service';

describe('GameRequestsService', () => {
  let service: GameRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
