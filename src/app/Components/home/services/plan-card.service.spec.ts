import { TestBed } from '@angular/core/testing';

import { PlanCardService } from './plan-card.service';

describe('PlanCardService', () => {
  let service: PlanCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
