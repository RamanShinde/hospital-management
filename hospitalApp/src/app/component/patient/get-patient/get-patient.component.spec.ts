import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPatientComponent } from './get-patient.component';

describe('GetPatientComponent', () => {
  let component: GetPatientComponent;
  let fixture: ComponentFixture<GetPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPatientComponent]
    });
    fixture = TestBed.createComponent(GetPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
