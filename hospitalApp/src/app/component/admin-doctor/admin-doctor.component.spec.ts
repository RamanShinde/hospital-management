import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorComponent } from './admin-doctor.component';

describe('AdminDoctorComponent', () => {
  let component: AdminDoctorComponent;
  let fixture: ComponentFixture<AdminDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDoctorComponent]
    });
    fixture = TestBed.createComponent(AdminDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
