import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordasgboardloginComponent } from './doctordasgboardlogin.component';

describe('DoctordasgboardloginComponent', () => {
  let component: DoctordasgboardloginComponent;
  let fixture: ComponentFixture<DoctordasgboardloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctordasgboardloginComponent]
    });
    fixture = TestBed.createComponent(DoctordasgboardloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
