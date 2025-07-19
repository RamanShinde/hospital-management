import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetappointmentComponent } from './getappointment.component';

describe('GetappointmentComponent', () => {
  let component: GetappointmentComponent;
  let fixture: ComponentFixture<GetappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetappointmentComponent]
    });
    fixture = TestBed.createComponent(GetappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
