import { TestBed } from '@angular/core/testing';

import { AppoitmetService } from './appoitmet.service';

describe('AppoitmetService', () => {
  let service: AppoitmetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoitmetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
