import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDoctorComponent } from './get-doctor.component';

describe('GetDoctorComponent', () => {
  let component: GetDoctorComponent;
  let fixture: ComponentFixture<GetDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDoctorComponent]
    });
    fixture = TestBed.createComponent(GetDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
