import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { DepartmentComponent } from './component/department/department.component';
import { PatientComponent } from './component/patient/patient.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AddDepartmentComponent } from './component/department/add-department/add-department.component';
import { ListOfDepartmentComponent } from './component/department/list-of-department/list-of-department.component';
import { UpdateDepartmentComponent } from './component/department/update-department/update-department.component';
import { AdminPatientComponent } from './component/patient/admin-patient/admin-patient.component';
import { AddPatientComponent } from './component/patient/add-patient/add-patient.component';
import { GetPatientComponent } from './component/patient/get-patient/get-patient.component';
import { AdddoctorComponent } from './component/doctor/adddoctor/adddoctor.component';
import { GetDoctorComponent } from './component/doctor/get-doctor/get-doctor.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { DoctordashboardComponent } from './component/doctordashboard/doctordashboard.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { AdminappointmentComponent } from './component/adminappointment/adminappointment.component';
import { AddappointmentComponent } from './component/appointment/addappointment/addappointment.component';
import { GetappointmentComponent } from './component/appointment/getappointment/getappointment.component';
import { DoctorLoginComponent } from './component/doctor-login/doctor-login.component';
import { DoctordasgboardloginComponent } from './component/doctordasgboardlogin/doctordasgboardlogin.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminDoctorComponent } from './component/admin-doctor/admin-doctor.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
   {path:'singup', component:SignupComponent},
  { path: 'doctor-login', component: AdminDoctorComponent },
  {path:'doctorsdashboardlogin',component:DoctordasgboardloginComponent},
  {
    path:"doctor-dashboard",component:DoctordashboardComponent,
    
  },
  {path:'admin-login',component:AdminloginComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      {
        path: 'doctors', component: DoctorComponent, children: [
          // { path: "", component:DoctorComponent },
          { path: "addDoctor", component: AdddoctorComponent },
          { path: "getDoctor", component: GetDoctorComponent }
        ]
      },
      {
        path: 'departments', component: DepartmentComponent,
        children: [
          { path: "", component: UpdateDepartmentComponent},
          { path: "addDepartment", component: AddDepartmentComponent },
          { path: "getDepartment", component: ListOfDepartmentComponent }
        ]
      },
      {
        path: 'patients', component: PatientComponent, children: [
          { path: "", component: AdminPatientComponent },
          { path: "addPatient", component: AddPatientComponent },
          { path: "getPatient", component: GetPatientComponent }
        ]
      },
      {
        path:"appointment",component:AppointmentComponent, children:[
          {path:"",component:AdminappointmentComponent},
          {path:"addappointment",component:AddappointmentComponent},
          {path:"getappointment",component:GetappointmentComponent}
        ]
      }
    ]
  },
   { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
