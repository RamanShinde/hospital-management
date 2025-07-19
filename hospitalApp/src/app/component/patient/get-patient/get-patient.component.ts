import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PatientserviceeService } from 'src/app/service/Patient/patientservicee.service';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css']
})
export class GetPatientComponent implements OnInit {
  constructor(
    private patientservice: PatientserviceeService,
    private fb: FormBuilder
  ) { }
  patients: any[] = [];
  updatePatient!: FormGroup;
  extingindex: number | null = null;
  ngOnInit(): void {
    this.patientservice.getAllPatient().subscribe(
      (data) => {
        this.patients = data;
      }
    );

    this.updatePatient = this.fb.group({
      patinetname: [''],
      age: [0],
      gender: [''],
      address: [''],
      phone: [null],
      admittedDate: [''],
      doctor: this.fb.group({
        did: [""],
      })
    })
  }

  editForm(patient: any, index: number) {
    this.extingindex = patient.id;
    this.updatePatient?.patchValue(patient);
  }
  updateForm() {
    if (this.extingindex != null) {
      this.patientservice.updatePatient(this.extingindex, this.updatePatient.value).subscribe(
        (resp) => {
          console.log("upate successfully!" + resp);
          alert("update successfully!!");
          this.extingindex = null;
          this.updatePatient.reset();
          this.ngOnInit();
        },
        (error) => {
          console.error("Something went wrong!!", error);
          alert(error);
        }
      )
    }
  }
  cancelUpdate() {
    this.extingindex = null;
    this.updatePatient.reset();
  }

  deletePatient(id: number) {
  console.log("Trying to delete patient with ID:", id);
  if (confirm("Are you sure you want to delete this patient?")) {
    this.patientservice.deletePatient(id).subscribe(
      (resp) => {
        alert(resp);
        this.ngOnInit();
      },
      (error) => {
        alert("Failed to delete!!");
        console.error(error);
      }
    );
  } else {
    console.log("Deletion cancelled");
  }
}
}
