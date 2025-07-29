import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppoitmetService } from 'src/app/service/Appoitment/appoitmet.service';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {
isAvailable: any;

  appoitments: any[] = [];
  constructor(
    private appoitmentservice: AppoitmetService,
    private doctorService:DoctorService,
  ) { };

  ngOnInit(): void {
    const doctorIdString = localStorage.getItem("doctorId");
    if (doctorIdString !== null) {
      const doctorId = Number(doctorIdString);
      this.appoitmentservice.getappoitmentbyDoctorId(doctorId).subscribe(
        (resp)=>{
          this.appoitments=resp;
        }
      );
    }
    else{
      alert("Doctor not found!!")
    }

  }
  toggleAvailability() {
  const id = Number(localStorage.getItem('doctorId'));
  this.doctorService.setAvailability(id, !this.isAvailable).subscribe(msg => {
    this.isAvailable = !this.isAvailable;
    alert(msg);
})
}

}
