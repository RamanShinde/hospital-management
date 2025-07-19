import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppoitmetService } from 'src/app/service/Appoitment/appoitmet.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {
  appoitments: any[] = [];
  constructor(
    private appoitmentservice: AppoitmetService,
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

}
