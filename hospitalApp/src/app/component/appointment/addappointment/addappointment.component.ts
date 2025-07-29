import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppoitmetService } from 'src/app/service/Appoitment/appoitmet.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private appoitmentservice: AppoitmetService
  ) { }
  appointmentform = this.fb.group({
    patientName: ['', Validators.required],
    doctorId: [null, Validators.required],
    doctorName: ['', Validators.required],
    date: ['', Validators.required],
    status: ['', Validators.required]
  })
  responseMessage = '';
  appointment: any = "";

  onsubmit() {
    console.log(this.appointmentform.value);
    const formsValue = this.appointmentform.value;
    const doctorId = Number(formsValue.doctorId);
    this.appoitmentservice.addApoitment(formsValue, doctorId).subscribe(
      (resp:string) => {
        alert(resp);
        this.responseMessage=resp;
        this.appointmentform.reset();

      },
     (error)=>{
       this.responseMessage = 'Error: Could not book appointment';
        console.error(error);
     }
    )
    // alert("Appoint done successfully!!")
    // this.route.navigate(["getappointment"])
    // this.appointmentform.reset();
  }
}