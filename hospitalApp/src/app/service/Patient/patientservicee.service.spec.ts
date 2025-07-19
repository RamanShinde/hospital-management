import { TestBed } from '@angular/core/testing';

import { PatientserviceeService } from './patientservicee.service';

describe('PatientserviceeService', () => {
  let service: PatientserviceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientserviceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
