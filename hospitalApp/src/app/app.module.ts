import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './component/department/department.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { PatientComponent } from './component/patient/patient.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AddDepartmentComponent } from './component/department/add-department/add-department.component';
import { ListOfDepartmentComponent } from './component/department/list-of-department/list-of-department.component';
import { UpdateDepartmentComponent } from './component/department/update-department/update-department.component';
import { AddPatientComponent } from './component/patient/add-patient/add-patient.component';
import { GetPatientComponent } from './component/patient/get-patient/get-patient.component';
import { AdminPatientComponent } from './component/patient/admin-patient/admin-patient.component';
import { AdddoctorComponent } from './component/doctor/adddoctor/adddoctor.component';
import { GetDoctorComponent } from './component/doctor/get-doctor/get-doctor.component';
import { AdminDoctorComponent } from './component/doctor/admin-doctor/admin-doctor.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { DoctorLoginComponent } from './component/doctor-login/doctor-login.component';
import { DoctordashboardComponent } from './component/doctordashboard/doctordashboard.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { AddappointmentComponent } from './component/appointment/addappointment/addappointment.component';
import { GetappointmentComponent } from './component/appointment/getappointment/getappointment.component';
import { AdminappointmentComponent } from './component/adminappointment/adminappointment.component';
import { DoctordasgboardloginComponent } from './component/doctordasgboardlogin/doctordasgboardlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DoctorComponent,
    PatientComponent,
    HomeComponent,
    AdminComponent,
    AdminHomeComponent,
    AddDepartmentComponent,
    ListOfDepartmentComponent,
    UpdateDepartmentComponent,
    AddPatientComponent,
    GetPatientComponent,
    AdminPatientComponent,
    AdddoctorComponent,
    GetDoctorComponent,
    AdminDoctorComponent,
    AdminloginComponent,
    DoctorLoginComponent,
    DoctordashboardComponent,
    AppointmentComponent,
    AddappointmentComponent,
    GetappointmentComponent,
    AdminappointmentComponent,
    DoctordasgboardloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
