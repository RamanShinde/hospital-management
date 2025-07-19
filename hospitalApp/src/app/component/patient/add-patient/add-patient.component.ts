import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientserviceeService } from 'src/app/service/Patient/patientservicee.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private patientservice: PatientserviceeService
  ) { };

  patientForm = this.fb.group({
    patinetname: [''],
    age: [0],
    gender: [''],
    address: [''],
    phone: [null],
    admittedDate: [''],
    doctor:this.fb.group({
      did:[""],
    })
  })
  
  patient:any;
  onsubmit(){
    console.log(this.patientForm.value);
     this.patient=this.patientForm.value;
     this.patientservice.addPatient(this.patient).subscribe(
      (resp)=>{
        console.log(resp);
        alert("add successfully!!")
      },
      (error)=>{
          alert("somthing went wrong!")
      }
     );
    //  this.route.navigate(["getPatient"]);
     this.patientForm.reset(); 
  }
}
